/** @format */

import React, { useState } from "react";
import { Button, Drawer, Input, Form } from "antd";
import Collaborators from "./Collaborators";
import initialUsers from "../../../public/assets/initialUser";
import style from "../../../style/Sorting/bottomSheetCollaborator.module.css";

interface Props {
  open?: boolean;
  handleClose?: () => void;
}

const BottomSheetCollaborators: React.FC<Props> = ({ handleClose, open }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(initialUsers);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);

    const filtered = initialUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(text.toLowerCase()) ||
        user.username.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredUsers(filtered);
  };
  const handleClickIcon = () => {};
  return (
    <>
      <Drawer
        placement='bottom'
        closable={false}
        title='Collaborators'
        open={open}
        className={style.drawer}>
        <Form autoComplete='off'>
          <div className={style.indicator}>
            <img
              src='/images/BottomIndicator.svg'
              alt='bottomIndicator'
              onClick={handleClose}
            />
          </div>
          <Input
            className={style.usernameInput}
            placeholder='Search username'
            type='text'
            value={searchText}
            onChange={handleSearch}
            prefix={
              <img
                src='/images/sortListSearch.svg'
                className='me-3'
              />
            }
          />
          {/* <h2 className={style.currentHeading}>Current Collaborators</h2> */}
          {filteredUsers.map((item, index) => (
            <Collaborators
              item={item}
              key={index}
              onClickIcon={handleClickIcon}
            />
          ))}
        </Form>
      </Drawer>
    </>
  );
};

export default BottomSheetCollaborators;

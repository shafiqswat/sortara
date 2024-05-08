/** @format */

"use client";
import NewListInput from "@/components/Sorting/newListInput";
import style from "../../../style/Pages/newList.module.css";
import { useRouter } from "next/navigation";
import NewListCrud from "@/components/Sorting/newListCrud";
import BottomSheetDrawer from "@/components/Sorting/bottomSheet";
import { Button, Form } from "antd";
import { useState } from "react";
import BottomSheetCollaborators from "@/components/Sorting/bottomSheetCollaborators";

export default function NewList() {
  const [selectedPrivacy, setSelectedPrivacy] = useState<string>("");
  const [showSpan, setShowSpan] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const router = useRouter();
  const handleExit = () => {
    router.push("/home");
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPrivacy(e.target.value);
    setShowSpan("");
  };
  const handleSave = () => {
    if (!selectedPrivacy) {
      alert("Please select a privacy option before saving.");
      return;
    }
    if (selectedPrivacy === "public") {
      setShowSpan("Public");
    } else {
      setShowSpan("Private");
    }
    setDrawerOpen(false);
  };
  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <div className='d-flex justify-content-between align-item-center w-75'>
          <img
            src='/images/newListLogo.svg'
            alt='newListLogo'
            className={style.logo}
          />
          <img
            src='/images/ChevronLeft.svg'
            alt='leftArrow'
            onClick={handleExit}
            className={style.exitImage}
          />
          <h1 className={style.createHeading}>Create a new list</h1>
        </div>
        <Form autoComplete='off'>
          <NewListInput
            labelText='List name'
            showCharacterCount={true}
            placeholderText='Enter a name for your new list...'
          />
          <div>
            <NewListInput
              labelText='Description'
              placeholderText='Type a description here...'
            />
          </div>
          <NewListCrud
            headingText='Privacy'
            paraText='Edit who can view your list'
            iconPath='images/edit.svg'
            alt='editIcon'
            handleEditClick={() => setDrawerOpen(true)}
            showSpan={showSpan}
          />
          <NewListCrud
            headingText='Collaborators'
            paraText='Add sorters from your community'
            iconPath='images/crudAdd.svg'
            alt='add icon'
            handleEditClick={() => setOpen(true)}
          />
          <div>{/* <h1>Collaborators</h1> */}</div>
          <NewListCrud
            headingText='Nested List'
            paraText='Embed a nested list inside of this list'
            iconPath='images/crudAdd.svg'
            alt='add icon'
          />
          <div className={style.btnContainer}>
            <Button
              className={style.saveBtn}
              htmlType='submit'>
              Save
            </Button>
          </div>
        </Form>
        <BottomSheetDrawer
          open={drawerOpen}
          onClose={handleDrawerClose}
          handleSave={handleSave}
          handleClick={() => setDrawerOpen(false)}
          handleRadio={handleRadioChange}
        />
        <BottomSheetCollaborators
          handleClose={() => setOpen(false)}
          open={open}
        />
      </div>
    </div>
  );
}

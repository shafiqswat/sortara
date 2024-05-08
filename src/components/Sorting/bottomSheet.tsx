/** @format */

import { Button, Drawer, Form, Space } from "antd";
import style from "../../../style/Sorting/bottomSheet.module.css";

interface BottomSheetDrawerProps {
  open: boolean;
  onClose: () => void;
  handleClick?: () => void;
  handleSave?: () => void;
  handleRadio?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BottomSheetDrawer: React.FC<BottomSheetDrawerProps> = ({
  open,
  onClose,
  handleClick,
  handleSave,
  handleRadio,
}) => {
  return (
    <Drawer
      placement='bottom'
      closable={false}
      onClose={onClose}
      height={500}
      open={open}>
      <div>
        <Form autoComplete='off'>
          <div className={style.indicator}>
            <img
              src='images/BottomIndicator.svg'
              onClick={handleClick}
            />
          </div>
          <h1 className={style.privacyHeading}>Privacy</h1>
          <h2 className={style.pubHeading}>Go Public with Sortara</h2>
          <div className='d-flex justify-content-between'>
            <input
              type='radio'
              id='only'
              name='privacy'
              value='private'
              className='me-3'
              onChange={handleRadio}
            />
            <label
              htmlFor='only'
              className={style.label}>
              Only you can view this list unless you add collaborators to your
              list.
            </label>
          </div>
          <h2 className={style.pubHeading}>Keep it Cozy with Private</h2>
          <div className='d-flex'>
            <input
              type='radio'
              id='any'
              name='privacy'
              value='public'
              onChange={handleRadio}
              className='me-3 .ant-checkbox-inner'
            />
            <label
              htmlFor='any'
              className={style.label}>
              Anyone in your friends can view your list on the Social feed
            </label>
          </div>
          <Button
            htmlType='submit'
            className={style.saveBtn}
            onClick={handleSave}>
            Save
          </Button>
        </Form>
      </div>
    </Drawer>
  );
};

export default BottomSheetDrawer;

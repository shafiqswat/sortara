/** @format */

"use client";
import NewListInput from "@/components/Sorting/newListInput";
import style from "../../../style/Pages/NestedList.module.css";
import collaboratorStyle from "../../../style/Sorting/Collaborators.module.css";
import { useRouter } from "next/navigation";
import NewListCrud from "@/components/Sorting/newListCrud";
import BottomSheetDrawer from "@/components/Sorting/bottomSheet";
import { Button, Form } from "antd";
import { useContext, useState } from "react";
import BottomSheetCollaborators from "@/components/Sorting/bottomSheetCollaborators";

export default function NestedList() {
  const [selectedPrivacy, setSelectedPrivacy] = useState<string>("");
  const [selectedCollaborators, setSelectedCollaborators] = useState<any[]>([]);
  const [showSpan, setShowSpan] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [nested, setNested] = useState(false);
  const [list, setList] = useState("");
  const [description, setDescription] = useState("");
  const [destination, setDestination] = useState("");

  const handleAddCollaborator = (collaborator: any) => {
    setSelectedCollaborators([...selectedCollaborators, collaborator]);
  };

  const handleRemoveCollaborator = (collaborator: any) => {
    setSelectedCollaborators(
      selectedCollaborators.filter((c) => c.id !== collaborator.id)
    );
  };
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
  const handleFinish = () => {
    router.push("/home");
  };
  return (
    <>
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
          <Form
            autoComplete='off'
            onFinish={handleFinish}>
            <NewListInput
              labelText='List name'
              showCharacterCount={true}
              placeholderText='Enter a name for your new list...'
              handleOnChange={(e) => setList(e.target.value)}
            />
            <div>
              <NewListInput
                labelText='Description'
                placeholderText='Type a description here...'
                handleOnChange={(e) => setDescription(e.target.value)}
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
            {selectedCollaborators.map((collaborator, index) => (
              <div
                key={index}
                className='d-flex justify-content-between align-items-center'>
                <div className={collaboratorStyle.userParent}>
                  <img
                    src={collaborator.imagePath}
                    alt={`Collaborator ${index}`}
                  />
                  <div className='ms-3'>
                    <h2 className={collaboratorStyle.username}>
                      {collaborator.name}
                    </h2>
                    <p className={collaboratorStyle.userPara}>
                      {collaborator.username}
                    </p>
                  </div>
                </div>
                <p className={style.EditPara}>Edit permissions</p>
              </div>
            ))}
            <NewListCrud
              headingText='Nested List'
              paraText='Embed a nested list inside of this list'
              iconPath='images/crudAdd.svg'
              alt='editIcon'
              handleEditClick={() => setNested(!nested)}
            />
            {nested && (
              <>
                <NewListInput
                  placeholderText='Enter a title for your nested list...'
                  handleOnChange={(e) => setDestination(e.target.value)}
                />
                <p
                  className={style.EditPara}
                  onClick={() => setNested(!nested)}>
                  Remove
                </p>
              </>
            )}
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
            handleSaveClose={() => setOpen(false)}
            onAddCollaborator={handleAddCollaborator}
            onRemoveCollaborator={handleRemoveCollaborator}
            selectedCollaborators={selectedCollaborators}
          />
        </div>
      </div>
    </>
  );
}

/** @format */
"use client";
import React, { useState } from "react";
import SortListItem from "@/components/Sorting/SortListItem";
import style from "../../../style/Pages/editlist.module.css";
import editData from "../../../public/assets/editdata";
import EditSheet from "@/components/Sorting/EditSheet";
import SortMore from "@/components/Sorting/sortMore";
import { useRouter } from "next/navigation";

function EditList() {
  const [draggedItem, setDraggedItem] = useState<number | null>(null);
  const [items, setItems] = useState(editData);
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null); // State to track selected item

  const handleIndicator = () => {
    setOpenModal(false);
  };
  const handleModal = () => {
    setOpenModal(true);
  };
  const router = useRouter();
  const handleAccept = () => {
    router.push("/home");
  };
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    setDraggedItem(id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.preventDefault();

    if (draggedItem === null) return;

    const draggedIndex = items.findIndex((item) => item.id === draggedItem);
    const targetIndex = items.findIndex((item) => item.id === id);

    const newItems = [...items];
    const [removed] = newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, removed);

    setItems(newItems);
    setDraggedItem(null);
  };

  const handleClick = (id: number) => {
    setSelectedItem(id);
  };

  return (
    <div className={style.container}>
      <div className='w-25 mx-auto d-flex justify-content-between mb-3'>
        <button className={style.selectBtn}>Select list:</button>
        <button
          className={style.selectBtn}
          id={style.cancel}>
          Cancel
        </button>
      </div>
      {items.map((item) => (
        <SortListItem
          key={item.id}
          item={item}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          handleModal={() => {
            handleClick(item.id);
            setOpenModal(true);
          }}
          cardBorder={selectedItem === item.id ? "2px solid #D0D0D0" : "none"}
        />
      ))}
      <div className='editList'>
        <EditSheet
          handleIndicator={handleIndicator}
          open={openModal}
          handleMore={() => setShowModal(true)}
        />
        <SortMore
          handleIndicator={() => setShowModal(false)}
          open={showModal}
          handleCancel={() => setShowModal(false)}
          handleAccept={handleAccept}
        />
      </div>
    </div>
  );
}

export default EditList;

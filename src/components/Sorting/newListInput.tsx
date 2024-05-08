/** @format */
import React, { useState } from "react";
import { Input } from "antd";
import style from "../../../style/Sorting/newListInput.module.css";

interface NewListProps {
  labelText?: string;
  placeholderText?: string;
  characterLimit?: number;
  showCharacterCount?: boolean;
}

export default function NewListInput({
  labelText,
  placeholderText,
  showCharacterCount,
  characterLimit = 56,
}: NewListProps) {
  const [remainingCharacters, setRemainingCharacters] =
    useState(characterLimit);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    const inputLength = inputText.length;
    const charactersLeft = characterLimit - inputLength;
    setRemainingCharacters(charactersLeft);
  };

  return (
    <div>
      <label className={style.label}>{labelText}</label>
      <Input
        type='text'
        placeholder={placeholderText}
        className={style.input}
        onChange={handleInputChange}
        maxLength={56}
        required
      />
      {showCharacterCount && (
        <p className={style.characterPara}>
          {remainingCharacters} characters left
        </p>
      )}
    </div>
  );
}

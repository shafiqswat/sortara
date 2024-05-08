/** @format */
import style from "../../../style/Sorting/newListCrud.module.css";
interface NewListCrudProps {
  headingText: string;
  paraText: string;
  iconPath: string;
  alt: string;
  handleEditClick?: () => void;
  showSpan?: string;
}
export default function NewListCrud({
  headingText,
  paraText,
  iconPath,
  handleEditClick,
  showSpan,
  alt,
}: NewListCrudProps) {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.privacyHeading}>
          {headingText}
          <span className={style.public}>{showSpan}</span>
        </h1>
        <p className={style.editPara}>{paraText}</p>
      </div>
      <img
        src={iconPath}
        alt={alt}
        className={style.editIcon}
        onClick={handleEditClick}
      />
    </div>
  );
}

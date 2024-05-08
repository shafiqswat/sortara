/** @format */

import { Collapse } from "antd";
import style from "../../../style/Sorting/sortingCollapseItem.module.css";

interface CollapseItem {
  title: string;
}

interface SortingCollapseProps {
  item: {
    collapseHeading?: string;
    collapseListItem?: CollapseItem[];
  };
}

export default function SortingCollapseItem({ item }: SortingCollapseProps) {
  const customIcon = (
    <img
      src='/images/arrowDown.svg'
      alt='Custom Icon'
      className={style.customIcon}
    />
  );

  const customIconArrowUp = (
    <img
      src='/images/arrowUp.svg'
      alt='arrowUp'
      className={style.customIcon}
    />
  );

  const text = (
    <>
      <ul className={style.menu}>
        {item.collapseListItem &&
          item.collapseListItem.map((listItem, i) => (
            <li key={i}>{listItem.title}</li>
          ))}
      </ul>
      <div className={style.imageContainer}>
        <img
          src='/images/restart.svg'
          alt='Restart'
          className={style.restart}
        />
        <img
          src='/images/check.svg'
          alt='checked'
          className='ms-3'
        />
        <img
          src='/images/exit.svg'
          alt='exit'
          className='ms-3'
        />
      </div>
    </>
  );

  return (
    <Collapse
      className={style.collapseContainer}
      expandIcon={({ isActive }) =>
        isActive ? customIconArrowUp : customIcon
      }>
      <Collapse.Panel
        header={<h1 className={style.label}>{item.collapseHeading}</h1>}
        key='1'>
        {text}
      </Collapse.Panel>
    </Collapse>
  );
}

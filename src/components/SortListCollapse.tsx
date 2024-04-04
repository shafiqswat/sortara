/** @format */

import { useState } from "react";
import { Collapse } from "antd";
import style from "../../style/sortListCollapse.module.css";
import SortListItem from "./SortListItem";
import items from "../../public/assets/sortListItem";

interface SortListCollapseProps {
  onCollapseChange: (isActive: boolean) => void;
}

export default function SortListCollapse({
  onCollapseChange,
}: SortListCollapseProps) {
  const [isCollapseActive, setIsCollapseActive] = useState(false);

  const handleCollapseChange = (keys: string | string[]) => {
    setIsCollapseActive(!!keys.length);
    onCollapseChange(!!keys.length);
  };

  const text = items.map((item, index) => (
    <SortListItem
      key={index}
      item={item}
    />
  ));
  const para = <p className={style.itemPara}>4 items</p>;

  return (
    <Collapse
      className={style.customCollapse}
      activeKey={isCollapseActive ? ["1"] : []}
      onChange={handleCollapseChange}
      items={[
        {
          key: "1",
          label: "Sort this later",
          children: text,
          extra: para,
        },
      ]}
    />
  );
}

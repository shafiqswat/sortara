/** @format */

import SortListItem from "../Sorting/SortListItem";
import yourListItems from "../../../public/assets/yourList";
export default function YourList() {
  return (
    <>
      <div>
        {yourListItems.map((item, index) => (
          <SortListItem
            item={item}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

import { useState } from "react";

interface ItemProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup(myprops: ItemProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function GetMessageFx() {
    return myprops.items.length === 0 ? <p>No Items Found</p> : null;
  }

  return (
    <>
      <h1>List</h1>
      {GetMessageFx()}
      <ul className="list-group">
        {myprops.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              myprops.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

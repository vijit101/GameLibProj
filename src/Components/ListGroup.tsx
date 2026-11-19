function ListGroup() {
  const items = ["New York", "San Francisco", "Baltic", "Scandanavia"];
  function GetMessageFx() {
    return items.length === 0 ? <p>No Items Found</p> : null;
  }
  return (
    <>
      <h1>List</h1>
      {GetMessageFx()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(e) => {
              console.log(item, index, e);
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

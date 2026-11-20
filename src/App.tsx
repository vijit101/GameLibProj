import ListGroup from "./Components/ListGroup";
function App() {
  const items = ["New York", "San Francisco", "Baltic", "Scandanavia"];
  const handleSelected = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {" "}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelected}
      ></ListGroup>{" "}
    </div>
  );
}

export default App;

import Item from "./item";

function TitlesList({ titles, deleteTitle }) {
  return (
    <>
      {titles.map((i) => {
        return <Item i={i} key={i.id} deleteTitle={deleteTitle} />;
      })}
    </>
  );
}

export default TitlesList;

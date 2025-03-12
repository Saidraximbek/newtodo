import ItemTodo from "./ItemTodo";

function TitlesList({ titles, deleteTitle }) {
  return (
    <>
      {titles.map((i) => {
        return <ItemTodo i={i} key={i.id} deleteTitle={deleteTitle} />;
      })}
    </>
  );
}

export default TitlesList;

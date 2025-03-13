import ItemTodo from "./ItemTodo";

function TitlesList({ titles, deleteTitle, setText, setBtnText, setTitles }) {
  return (
    <>
      {titles.map((i) => {
        return <ItemTodo i={i} key={i.id} deleteTitle={deleteTitle} setBtnText={setBtnText} setText={setText} titles={titles} setTitles={setTitles} />;
      })}
    </>
  );
}

export default TitlesList;

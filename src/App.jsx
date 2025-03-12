import { Fragment, useEffect, useState } from "react";
import "./App.css";
import TitlesList from "./components/TitlesList.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [text, setText] = useState("");
  const [titles, setTitles] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (text.length > 4) {
      setError(false);
    }
  }, [error]);
  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 5000);
  }, [error]);

  const deleteTitle = (id) => {
    const filteredTitles = titles.filter((t) => t.id !== id);
    setTitles(filteredTitles);
    console.log(1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length == 0) {
      setError("Write...:(");
    } else if (text.length < 4) {
      setError("Write more 4 letters :(");
    } else {
      setTitles([
        ...titles,
        {
          title: text,
          id: Math.random(),
        },
      ]);
      setText("");
      setError(false);
    }
  };

  return (
    <Fragment>
      <div className="mt-[125px] flex flex-col bg-[rgba(100,0,10,0.5)]  gap-8 p-8 rounded-2xl w-[750px]">
        <h1 className="gamer-title">Gamer List</h1>

        <Form
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
          error={error}
        />
        {error && <p className="p-[25px] mt-[-25px] text-error">{error}</p>}
        <ul className="flex flex-col p-[20px] gap-5 max-h-[400px] overflow-clip space-y-4 overflow-y-auto overflow-x-hidden">
          <TitlesList titles={titles} deleteTitle={deleteTitle} text={text} />
        </ul>
      </div>
    </Fragment>
  );
}

export default App;

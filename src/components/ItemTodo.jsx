import { RiDeleteBin6Line } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import Modal from "./Modal.jsx";
import { useEffect, useState } from "react";

function Item({ i, deleteTitle, setText, setBtnText, titles, setTitles }) {
  const [showModal, setShowModal] = useState(false);

  function getEditVal(newId) {
    setText(i.title);
    setBtnText("Edit");

    const filterEdit = titles.filter((d) => {

      return d.id !== newId;
    });
    console.log(filterEdit);

    setTitles(filterEdit);
  }

  useEffect(()=>{
          setBtnText("Add");
  },[getEditVal])

  return (
    <div className="flex gap-2">
      {showModal && (
        <Modal setShowModal={setShowModal} i={i} deleteTitle={deleteTitle} />
      )}

      <li className="flex items-center gap-2 bg-[#180303] p-4 rounded-2xl w-[100%] capitalize">
        <IoGameControllerOutline />
        <p>{i.title}</p>
      </li>

      <button
        className="bg-[#180303] rounded-2xl hover:rotate-360 hover:duration-1500 hover:transition p-5"
        onClick={() => getEditVal(i.id)}
      >
        <FaRegEdit className="w-6 h-6 text-white" />
      </button>

      <button
        className="bg-[#180303] rounded-2xl hover:rotate-360 hover:duration-1500 hover:transition p-5"
        onClick={() => setShowModal(true)}
      >
        <RiDeleteBin6Line className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}

export default Item;

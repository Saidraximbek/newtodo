import { RiDeleteBin6Line } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import Modal from "./Modal.jsx";
import { useState } from "react";

function Item({ i, deleteTitle }) {
  const [showModal, setShowModal] = useState(false);

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
        onClick={() => setShowModal(true)}
      >
        <RiDeleteBin6Line className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}

export default Item;

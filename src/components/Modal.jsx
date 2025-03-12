function Modal({ i, setShowModal, deleteTitle }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center z-50">
      <div className="bg-[#180303] text-white p-6 rounded-lg shadow-lg w-96">
        <p className="text-lg font-bold mb-4">Delete "{i.title}"?</p>

        <div className="flex justify-between">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
            onClick={() => {
              deleteTitle(i.id);
              setShowModal(false);
            }}
          >
            Yes
          </button>

          <button
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            onClick={() => setShowModal(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

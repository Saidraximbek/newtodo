function Form({ handleSubmit, text, setText }) {
  return (
    <>
      <form
        action=""
        className="hero-form flex flex-col gap-3 w-[100%] p-[20px]"
        onSubmit={handleSubmit}
      >
        <input
          className="input input-secondaryw-full w-[100%] p-3 text-lg text-red-400 bg-gray-900 border border-red-500 rounded-lg focus:outline-none focus:ring-5 focus:ring-black focus:border--500 shadow-lg shadow--500/50"
          type="text"
          placeholder="Write gamer name..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button
          className="p-1 text-lg font-bold text-white bg-black border border-red-500 rounded-lg shadow-lg shadow-red-500/50 transition-all duration-300 hover:bg-red-900 hover:shadow-red-600/50 focus:ring-4 focus:ring-red-500/50"
          type="submit"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default Form;

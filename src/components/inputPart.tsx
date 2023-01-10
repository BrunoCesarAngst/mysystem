export default function InputPart() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline">Input</h1>
        <div className="flex flex-row justify-center items-center">
          <input
            className="border-2 border-black rounded-md p-2 m-2"
            type="text"
            placeholder="Input"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

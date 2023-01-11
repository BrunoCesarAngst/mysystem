import { useAtom } from 'jotai';
import { stuffsAtom } from '../lib/atoms';

export default function InputPart() {
  const [stuff, setStuff] = useAtom(stuffsAtom);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      input: { value: string };
    };
    const input = target.input.value;
    setStuff([...stuff, { id: stuff.length, description: input }]);
    target.input.value = '';
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline">Input</h1>
        <div className="flex flex-row justify-center items-center">
          <form onSubmit={handleSubmit}>
            <input
              className="border-2 border-black rounded-md p-2 m-2"
              type="text"
              placeholder="Input"
              name="input"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
          
          {/* <input
            className="border-2 border-black rounded-md p-2 m-2"
            type="text"
            placeholder="Input"
            name="input"
          />
          <button
            onClick={() => handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button> */}
        </div>
      </div>
    </div>
  );
}

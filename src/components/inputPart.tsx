import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useEffect } from 'react';
import { stuffsAtom } from '../lib/atoms';
import { Stuff, Stuffs } from '../types/types';

const stuffsLocalStorage = atomWithStorage<Stuffs>('stuffs', []);

export default function InputPart() {
  const [stuff, setStuff] = useAtom(stuffsAtom);
  const [stuffs, setStuffs] = useAtom(stuffsLocalStorage);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      input: { value: string };
    };
    const input = target.input.value;
    setStuff([...stuff, { id: stuff.length, description: input }]);
    target.input.value = '';
  };

  console.log(stuff.length);
  console.log('localStorage', stuffs);

  // salvar no localStorage quando o array mudar
  useEffect(() => {
    setStuffs(stuff);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stuff]);

  // carregar do localStorage quando o componente for montado
  useEffect(() => {
    setStuff(stuffs);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Registre</h1>
        <div className="flex flex-row justify-center items-center">
          <form onSubmit={handleSubmit}>
            <input
              className="border-2 border-black rounded-md p-2 m-2"
              type="text"
              placeholder="Escreva algo..."
              name="input"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sarvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

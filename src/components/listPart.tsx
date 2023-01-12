import { useAtom } from 'jotai';
import { stuffsAtom } from '../lib/atoms';
import { TStuff } from '../types/types';

export default function ListPart() {
  const [stuffs, setStuffs] = useAtom(stuffsAtom);

  // editar o item da lista e inserir uma nova descrição
  const handleClick = (item: TStuff) => {
    const newStuff = stuffs.map(stuffItem => {
      if (stuffItem.id === item.id) {
        return { ...stuffItem, description: 'Novo item' };
      }
      return stuffItem;
    });
    setStuffs(newStuff);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Inbox</h1>
        <div className="flex flex-col justify-center items-center">
          <ul className="list-none list-inside">
            {stuffs.map(item => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleClick(item)}
                  className="py-1 px-2"
                >
                  {item.description}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import { useAtom } from 'jotai';
import { stuffsAtom } from '../lib/atoms';

export default function ListPart() {
  const [stuff] = useAtom(stuffsAtom);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Inbox</h1>
        <div className="flex flex-col justify-center items-center">
          <ul className="list-none list-inside">
            {stuff.map(item => (
              <li key={item.id}>{item.description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

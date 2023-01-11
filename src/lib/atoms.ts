import { atom } from "jotai";

type Stuff = {
  id: number;
  description: string;
};

type Stuffs = Stuff[];

export const stuffsAtom = atom<Stuffs>([]);

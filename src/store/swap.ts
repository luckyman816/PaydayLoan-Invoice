import { IPool, IQuoteSwapResponse } from '@/types/maya';
import { atom } from 'jotai';

//stage setting
export const stageAtom = atom<String>("swap");
export const stageAtomHome = atom<String>("home");
//current modal setting
export const currentModalTypeAtom = atom<String>("");


export const poolsAtom = atom<IPool[]>([]);
export const fromTokenAtom = atom<IPool | undefined>(undefined);
export const toTokenAtom = atom<IPool | undefined>(undefined);
export const tokenPricesAtom = atom<Record<string, string>>({});
export const QuoteSwapResponseAtom = atom<IQuoteSwapResponse|undefined>(undefined);


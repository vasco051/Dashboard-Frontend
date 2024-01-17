import {FC, createContext, PropsWithChildren} from 'react';

import {store} from "stores/general/store.ts";

export const Context = createContext({
  store: store,
});

export const StoreProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <Context.Provider value={{store}}>{children}</Context.Provider>
  );
};
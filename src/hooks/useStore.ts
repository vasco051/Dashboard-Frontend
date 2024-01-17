import {useContext} from "react";

import {Context} from "components/Logic/StoreProvider";

export const useStore = () => {
  const context = useContext(Context);
  return context.store;
}
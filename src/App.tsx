import { FC } from 'react';
import { BrowserRouter } from "react-router-dom";

import { AppRouting } from "routing";
import { StoreProvider } from "components/logic/store-provider";
import { Sidebar } from "components/layout/sidebar";

import { staticLinks } from "config/routingLinks.ts";

const App: FC = () => {
  return (
    <div className='App'>
      <StoreProvider>
        <BrowserRouter basename={staticLinks.main}>
          <Sidebar/>
          <AppRouting/>
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
};

export default App;
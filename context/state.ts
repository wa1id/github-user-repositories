import { createContext } from "react";

interface AppContextInterface {
  username: string;
  setUsername: (username: string) => void;
}

const appContextDefault: AppContextInterface = {
  username: "",
  setUsername: () => null,
};

const AppContext = createContext<AppContextInterface>(appContextDefault);

export default AppContext;

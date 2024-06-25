import { useState } from "react";

import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1 className=" bg-orange-700 text-center">User Content Provider</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;

import React, { useState } from 'react';
import UserInput from "./components/UserInput/UserInput";
import UserList from './components/UserList/UserList';

function App() {
  const [userDataList, setUserDataList] = useState([]);

  const userData = (newUser) => {
    setUserDataList(prevUserDataList => [newUser, ...prevUserDataList]);
    console.log(userDataList);
  }

  return (
    <>
      <UserInput addUser={userData} />
      <UserList userData={userDataList}/>
    </>
  );
}

export default App;

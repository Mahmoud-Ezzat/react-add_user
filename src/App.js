import React , {useState} from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  const[userList,setUserList]=useState([]);

  const addUserHandler=(uName,Uage)=>{
    setUserList((previousList)=>{

      return[...previousList, {name:uName,age:Uage , id:Math.random().toString()}]
        });
        
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;

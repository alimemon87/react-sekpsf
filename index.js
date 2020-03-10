import React, { useState,useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function App(){
  const [counter,setCounter] = useState(0);
  const [users,setUsers]= useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  async function fetchData(){
    const res = await fetch('https://reqres.in/api/users');
      res.json()
      .then(res => someFunc(res))
      .then( setUsers(res.data))

      //setUsers(res.data)
  };

  function someFunc(res){
    console.log(res.data);
   
  }

  return (
      <div>
        {users}
        <Hello counter={counter} users={users} />
        <button onClick={()=>setCounter(counter+1)} >Increment Counter</button>
      </div>
    );
  }
render(<App />, document.getElementById('root'));

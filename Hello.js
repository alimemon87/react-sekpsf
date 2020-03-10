import React from 'react';

function Hello(props){
  return(
    <div>
      <h3>{props.counter}</h3>
      <ul>
        {
        /*props.users.map((user,index)=>{
          return <li>user.first_name</li>
        })*/
        }
      </ul>
    </div>
  );
}

export default Hello;

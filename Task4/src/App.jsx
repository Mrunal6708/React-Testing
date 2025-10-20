import React,{ useState , useEffect } from 'react'
import './App.css'

function UserList() {
  const [users , setUsers]= useState([]);
  const [loading , setLoading]= useState(true);
  const [error , setError]= useState(null);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response)=>{
      if(!Response.ok){
        throw new Error('Network response was not ok');
      }
      return Response.json();
    })
    .then((data)=>{
      setUsers(data);
      setLoading(false);
    })
    .catch((error)=>{
      setError(error.message);
      setLoading(false);
    });
  },[]);

  if(loading){
    return <p>Loading users.....</p>
    }
    if(error){
      return <p>Error fetching users:{error}</p>
    }
    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((users)=>(
            <li key={users.id}>
              <strong>
                {users.name}
                <br />
                {users.email}
              </strong>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default UserList;
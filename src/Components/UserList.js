import React, { useEffect, useState } from 'react';
import Loader from "react-js-loader";

import axios from 'axios';

function UserList () {
    const [List,SetList] = useState([]);
    
    useEffect(() => {
      const fetchUsers = async ()  => {
        try {
          var res = await axios.get("http://localhost:5000/users/GetAll");
          console.log(res)
          SetList(res.data)
        }catch (err) {
            alert("erreur serveur")
        }
      }
      fetchUsers();  
    },[]) 
    return (
      <div>
        {List.length > 0 ?
          <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
              { List.map((user, index) => 
              <tr>l
              <th scope="row">{index}</th>
              <td>{user._id}</td>
              <td>{user.UserName}</td> 
              <td>{user.Mail}</td>
            
            </tr>
              )}
            
          </tbody>
        </table> :
        <div >
          <Loader type="spinner-cub" bgColor={"#fffff"} color={"black"} title={"Loading ..."} size={100} />
        </div> }
      </div>
    )


}


export default UserList;

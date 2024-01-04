import React from 'react';
import './App.css';


function App() {
  const data = [
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4},
    { id: 5},
    { id: 6},
    { id: 7},
    { id: 8},
  ];

  return (

 <div className="content">


      <div className="fulltable">
      <div className="table">
      <button className="but"><strong>Create New</strong></button>

        <table className="table1">
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer</th>
              <th>Grade</th>
              <th>Item Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.customer}</td>
                <td>{item.grade}</td>
                <td>{item.itemname}</td>
                <td>{item.action}

                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
 </div>
  );
}

export default App;

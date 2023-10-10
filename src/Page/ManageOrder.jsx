/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import axios from 'axios'
function ManageUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3000/user")
    //   .then((response) => response.json())
    //   .then((data) => setUsers(data));
    fetch();
  }, []);
  const fetch = async () => {
    // Axios.........
    const res = await axios.get(`https://devsite-hotel-default-rtdb.asia-southeast1.firebasedatabase.app/order.json`);
    setUsers(res.data);
  }
  const onDelete = async (id) => {
    const res = await axios.delete(`https://devsite-hotel-default-rtdb.asia-southeast1.firebasedatabase.app/order.json/${id}`);
    if (res.status == "200") {
      alert('success...');
      fetch();
    }

  };
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line">Room Booking Table</h1>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Booking Room</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Adults</th>
                          <th>Children</th>
                          <th>CheckIn</th>
                          <th>CheckOut</th>
                          <th>Edit/Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          users.map((user) => (
                            <tr>
                              <td>{user.id}</td>
                              <td>{user.selectedRoom}</td>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.numberOfAdults}</td>
                              <td>{user.numberOfChildren}</td>
                              <td>{user.checkInDate}</td>
                              <td>{user.checkOutDate}</td>
                              <td>
                                <button type="submit" className="btn btn-success">
                                  Edit
                                </button>
                                <button type="submit" className="btn btn-danger" onClick={() => onDelete(user.id)} >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /. PAGE-INNER  */}
      </div>
    </div>
  )
}

export default ManageUser
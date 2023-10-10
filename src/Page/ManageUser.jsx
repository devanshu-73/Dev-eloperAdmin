/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function ManageUser() {
  const redirect = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {

    // fetch("http://localhost:3000/user")
    //   .then((response) => response.json())
    //   .then((data) => setUsers(data));
    fetch();
  }, []);
  // Axios.........
  const fetch = async (e) => {
    const res = await axios.get('https://devsite-hotel-default-rtdb.asia-southeast1.firebasedatabase.app/user.json');
    setUsers(res.data);
  }
  const onDelete = async (id) => {
    const res = await axios.delete(`https://devsite-hotel-default-rtdb.asia-southeast1.firebasedatabase.app/user.json/${id}`);
    if (res.status == "200") {
      alert('success...');
      fetch();
    }

  };

  const statusChange = async (id) => {
    const res = await axios.get(`https://devsite-hotel-default-rtdb.asia-southeast1.firebasedatabase.app/user.json/${id}`);
    if (res.data.status) {
      const res1 = await axios.patch(`https://devsite-hotel-default-rtdb.asia-southeast1.firebasedatabase.app/user.json/${id}`, { status: false });
      if (res1.status == 200) {
        fetch();
        alert('status Block successFul');
      }
    } else {
      const res1 = await axios.patch(`https://devsite-hotel-default-rtdb.asia-southeast1.firebasedatabase.app/user.json/${id}`, { status: true });
      if (res1.status == 200) {
        fetch();
        alert('status Unblock successFul');
      }
    }
  }
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line">User Table</h1>
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
                          <th>Id</th>
                          <th>Username</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Password</th>
                          <th>Status</th>
                          <th>Edit/Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          users.map((user) => (
                            <tr key={user.id}>
                              <td>{user.id}</td>
                              <td>{user.username}</td>
                              <td>{user.email}</td>
                              <td>{user.phone}</td>
                              <td>{user.password}</td>
                              <td>{(user.status) ? 'Unblock' : 'Block'}</td>
                              <td>
                                <button type="submit" className="btn btn-success" onClick={() => { redirect('/edit_user/' + user.id) }} >
                                  Edit
                                </button>
                                <button type="submit" className="btn btn-danger" onClick={() => onDelete(user.id)} >
                                  Delete
                                </button>
                                <button type="submit" className="btn btn-danger" onClick={() => statusChange(user.id)} >
                                  {(user.status) ? 'Block' : 'Unblock'}
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
  );
}

export default ManageUser;

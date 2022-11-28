import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:3001/users');
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  };
  return (
    <div className='container' style={{ marginTop: '10px' }}>
      <table className='table'>
        <thead>
          <tr className='bg-primary text-white'>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Use Name</th>
            <th scope='col'>Emails</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link className='btn btn-light m-2' to={`/users/${user.id}`}>
                  View
                </Link>
                <Link
                  className='btn btn-outline-primary m-2'
                  to={`/users/edit/${user.id}`}
                >
                  Edit
                </Link>
                <button
                  className='btn btn-danger'
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

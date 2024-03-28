import React from "react";
import axios from 'axios';
import { FaTrash, FaUser } from "react-icons/fa";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const Users = () => { 
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/api/user`);
      return res.json();
    },
  });
  // console.log(users);

  const handleMakeAdmin = user => {
    if (user && user._id) {
      axios.patch(`http://localhost:5000/api/user/admin/${user._id}`).then(res => {
        alert(`${user.name} is now admin`);
        refetch();
      });
    } else {
      console.error("Invalid user object:", user);
    }
  };
  
  const handleDeleteUser = user => {
    if (user && user._id) {
      axios.delete(`http://localhost:5000/api/user/${user._id}`).then(res => {
        alert(`${user.name} is removed`);
        refetch();
      });
    } else {
      console.error("Invalid user object:", user);
    }
  };
  

  return (
    <div>
      <div className="flex items-center justify-between m-4">
        <h5>All Users</h5>
        <h5>Total Users: {users.length}</h5>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra md:w-[870px]">
            <thead className="bg-blue text-white rounded-lg">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role === "admin" ? "Admin" : <button onClick={() => handleMakeAdmin(user)} className="btn btn-xs btn-circle bg-blue text-white"><FaUser/></button>}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(user)} className="btn btn-xs bg-red text-white">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const UsersWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
};

export default UsersWrapper;

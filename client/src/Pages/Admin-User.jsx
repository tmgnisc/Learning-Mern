import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const AdminUsers = () => {
    const { authorizationToken } = useAuth();
    const [users, setUsers] = useState([]);

    const getAllUsersData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Users data:", data);
                setUsers(data); // Set the users state with fetched data
            } else {
                const errorData = await response.json();
                console.error("Failed to fetch users:", errorData);
            }
        } catch (error) {
            console.error("Error while fetching users data:", error);
        }
    };


    // this is delete function
    const deleteUser = async (userId) =>{
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${userId}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,

                },
            })
            if(response.ok){
                setUsers(users.filter(user => user._id !== userId))   //removing users from state
                console.log(`user with id ${userId} deleted successfully`)
                            } else {
                                const errorData = await response.json()
                                console.error("this is error", errorData)
                            }
        } catch (error){
            console.error(error)
        }
    }

    useEffect(() => {
        getAllUsersData();
    }, []);

    return (
        <div className="admin-users-container">
            <style>
                {`
                    .admin-users-container {
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                        border: 1px solid #e0e0e0;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        background-color: #ffffff;
                    }

                    h1 {
                        text-align: center;
                        margin-bottom: 20px;
                        color: #333;
                    }

                    .users-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }

                    .users-table th,
                    .users-table td {
                        padding: 12px 15px;
                        border: 1px solid #e0e0e0;
                        text-align: left;
                    }

                    .users-table th {
                        background-color: #007bff;
                        color: white;
                        font-weight: bold;
                    }

                    .users-table tr:nth-child(even) {
                        background-color: #f2f2f2;
                    }

                    .users-table tr:hover {
                        background-color: #e0e0e0;
                    }
                        .delete-btn{
                        background-color: #ff4d4d;
                        color: white;
                        border: none;
                        padding: 6px 12px;
                        cursor: pointer;
                        border-radius: 4px;
                        }
                        .delete-btn:hover{
                        background-color: #e60000;
                        }
                `}
            </style>
            <h1>User Details</h1>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th> 
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}> 
                            <td>{user._id}</td> 
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td><button className="delete-btn" onClick={() => deleteUser(user._id)}>Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

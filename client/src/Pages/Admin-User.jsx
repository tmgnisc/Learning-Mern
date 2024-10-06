import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const AdminUsers = () => {
    const { authorizationToken } = useAuth(); // Get authorizationToken from context
    const [users, setUsers] = useState([]);

    const getAllUsersData = async () => {
        try {
            console.log("Authorization Token:", authorizationToken); // Log the token

            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken, // Send the authorization token
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Users data:", data);
                setUsers(data); // Update the users state with fetched data
            } else {
                const errorData = await response.json();
                console.error("Failed to fetch users:", errorData);
            }
        } catch (error) {
            console.error("Error while fetching users data:", error);
        }
    };

    useEffect(() => {
        getAllUsersData();
    }, []); // only run once on mount

    return (
        <div>
            <h1>This is the user details page</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

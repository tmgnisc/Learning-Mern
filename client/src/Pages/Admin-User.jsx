import { useEffect } from "react"

export const AdminUsers = () =>{

    const getAllUsersData = async () =>{
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers:{
                    Authorization: 
                }
            })
        } catch (error) {
          console.log("error while fetching users data", error);
            
        }
    }
    useEffect(()=> {
        getAllUsersData()
     }, [])

    return(


        <h1>This is user details page</h1>
    )
}
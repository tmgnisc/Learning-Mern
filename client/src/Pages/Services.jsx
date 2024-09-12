import React, {useEffect, useState} from "react"

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() =>{
        //fetch data from API
        const fetchServices = async () =>{
            try{
                const response = fetch(`http://localhost:5000/api/data/service`)
                const data = await response.json()
            }
        }
    })
    return (
        <h1>this is service page</h1>
    )
}
export default Services
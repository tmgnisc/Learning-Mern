import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    //fetch data from API
    const fetchServices = async () => {
      try {
        const response = fetch(`http://localhost:5000/api/data/service`);
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.log("error while fetching service API", error);
      }
    };
    fetchServices();
  }, []);
  return (
    <div className="services-container" style={{ padding: "20px" }}>
      <h1>Our Services</h1>
      <div
        className="services-grid"
        style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
      >
        {services.map((service) => (
          <div key={service._id} className="service-card" style={cardStyle}>
            <h2>{service.service}</h2>
            <p>{service.description}</p>
            <p>
              <strong>Price:</strong> ${service.price}
            </p>
            <p>
              <strong>Provider:</strong> {service.provider}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "20px",
  width: "300px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  textAlign: "center",
};
export default Services;

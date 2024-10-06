import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import NavBar from "./components/Navbar";
import NotFound from "./Pages/404";
import Logout from "./Pages/Logout";
import { AdminLayout } from "./components/layouts/Admin-Layout";
import { AdminUsers } from "./Pages/Admin-User";
import { AdminContacts } from "./Pages/Admin-Contacts";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
          {/* nested route */}
          <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUsers/>}/>
          <Route path="contact" element={<AdminContacts/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

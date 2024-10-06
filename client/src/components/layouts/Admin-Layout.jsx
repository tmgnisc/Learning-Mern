import React from 'react';
import {NavLink, Outlet} from "react-router-dom"
import './AdminLayout.css'; // Make sure to link the CSS file

export const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <aside className="sidebar">
                <h2>Admin Panel</h2>
                <nav>
                    <ul>
                        <li> <NavLink to="/admin/users">Users</NavLink> </li>
                        <li><NavLink to="/admin/services">Services</NavLink></li>
                        <li><NavLink to="/admin/contact">Contacts</NavLink></li>
                    </ul>
                </nav>
            </aside>
           <Outlet/> 
        </div>
    );
};

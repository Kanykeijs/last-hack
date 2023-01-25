import React from 'react';
import AddChildren from '../components/ children/AddChildren';

const AdminPage = () => {
    const token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : "";
    alert(token.access);
    return (
        <div>
          Admin Page  
          <AddChildren/>
        </div>
    );
};

export default AdminPage;
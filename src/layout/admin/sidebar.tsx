import React from 'react'
import { Link } from 'react-router-dom';

interface SidebarProps {
  setActivePage: (page: string) => void;
}

const AdminSidebar = ({ setActivePage }: SidebarProps) => {
  return (
      <div style={{ width: "200px", padding: "10px", borderRight: "1px solid #ddd" }}>
          <h3>Menu</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
              <li><button onClick={() => setActivePage("product")}>Product</button></li>
              <li><button onClick={() => setActivePage("category")}>Category</button></li>
              <li><button onClick={() => setActivePage("user")}>User</button></li>
          </ul>
      </div>
  );
};

export default AdminSidebar
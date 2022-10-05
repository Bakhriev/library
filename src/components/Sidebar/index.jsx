import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./Sidebar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div
      className={`app ${toggled ? "toggled" : ""}`}
      style={{ height: "100%" }}
    >
      <div
        className="btn-toggle"
        onClick={() => handleToggleSidebar(true)}
      ></div>
      <ProSidebar
        toggled={toggled}
        onToggle={handleToggleSidebar}
        breakPoint="md"
      >
        <Menu iconShape="square">
          <SubMenu title="Технология нетканных материалов">
            <Link to="/lab-1">
              <MenuItem>
                1. Ассортимент и структура нетканных материалов
              </MenuItem>
            </Link>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;

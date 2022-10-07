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
            <SubMenu title={"Практика"}>
              <MenuItem onClick={() => handleToggleSidebar(false)}>
                <Link to="/lab-1">
                  1. Ассортимент и структура нетканных материалов
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleToggleSidebar(false)}>
                <Link to="/lab-2">2. Скоро</Link>
              </MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu title="Технология и оборудование текстильных изделий">
            <SubMenu title={"Лекция"}>
              <MenuItem onClick={() => handleToggleSidebar(false)}>
                <Link to={"/let-1"}>1. Скоро</Link>
              </MenuItem>
            </SubMenu>

            <SubMenu title={"Лабороторная"}>
              <MenuItem onClick={() => handleToggleSidebar(false)}>
                <Link to="/lab-3">1. Скоро</Link>
              </MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;

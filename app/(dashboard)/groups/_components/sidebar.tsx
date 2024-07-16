import React from "react";

import UserInfo from "./user-info";
import GroupPanel from "./group-panel";

const Sidebar = () => {
  return (
    <aside>
      <UserInfo />
      <GroupPanel />
    </aside>
  );
};

export default Sidebar;

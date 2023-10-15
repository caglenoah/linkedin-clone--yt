import React from "react";
import "./Sidebar.css";

function Sidebar() {

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://ih1.redbubble.net/image.2053091744.5872/st,small,507x507-pad,600x600,f8f8f8.jpg"
          alt="" />
        {/* avatar */}
        <h2>Noah Cagle</h2>
        <h4>noah.cagle.email@email</h4>
      </div>
          
      <div className="sidebar__stats"></div>
      <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className="sidebar__statNumber">1,358,132</p>
      </div>
      <div className="sidebar__stat">
        <p> Views on post</p>
        <p className="sidebar__statNumber">122,345,455</p>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("sofwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
    </div>

    </div>
  );
}

export default Sidebar
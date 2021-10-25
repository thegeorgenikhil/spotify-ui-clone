import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="line"></div>
      <div className="player-container">
        <div className="song-container">
          <div className="player-img"
          style={{backgroundImage:`url("${props.currSong.imgURL}")`}}
          ></div>
          <div>
            <h1 className="player-heading">{props.currSong.name}</h1>
            <p className="player-sub-heading">{props.currSong.singer}</p>
          </div>
        </div>
        <div className="player-icon-container">
          <i className="fas fa-desktop player-icon"></i>
          <i className="far fa-heart player-icon"></i>
          <i className="fas fa-play player-icon"></i>
        </div>
      </div>
      <div className="bottom-nav-icon-container">
        <i className="fas fa-home bottom-nav-icon"></i>
        <i className="fas fa-search bottom-nav-icon"></i>
        <i className="fas fa-book-open bottom-nav-icon"></i>
      </div>
    </div>
  );
}

export default Footer;

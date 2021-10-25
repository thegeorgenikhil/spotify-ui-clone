import React, { useEffect, useState } from "react";
import "./Header.css";
import axios from "axios";

function Header(props) {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get("https://spotify-ui-clone-backend.herokuapp.com/api/v1/headerSongs")
      .then((response) => setSongs(response.data));
  },[]);
  return (
    <div className="header">
      {songs.map((song) => {
        return (
          <div key={song.id} onClick={props.stateUpdate} id={JSON.stringify(song)} className="header-tile">
            <div className="tile-img" id={JSON.stringify(song)} style={{backgroundImage:`url("${song.imgURL}")`}}></div>
            <div className="tile-content" id={JSON.stringify(song)}>{song.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Header;

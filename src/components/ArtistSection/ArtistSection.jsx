import React, { useEffect, useState } from "react";
import "./ArtistSection.css";
import axios from "axios";

function ArtistSection(props) {
  const [db, setDb] = useState([]);
  useEffect(() => {
    axios
      .get("https://spotify-ui-clone-backend.herokuapp.com/api/v1/singers")
      .then((response) => setDb(response.data));
  }, []);
  return (
    <div className="section">
      <h1 className="section-heading">{props.name}</h1>
      <div className="artist-section-container">
        {db.map((item) => {
          return (
            <div className="card-container" key={item.id}>
              <div
                className="card-img"
                style={{ borderRadius:"50%",backgroundImage:`url("${item.imgURL}")` }}
              ></div>
              <div className="card-name">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArtistSection;

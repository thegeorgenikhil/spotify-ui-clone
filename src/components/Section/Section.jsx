import React, { useEffect, useState } from "react";
import "./Section.css";
import axios from "axios";

function Section(props) {
  const [db, setDb] = useState([]);
  useEffect(() => {
    axios
      .get(props.api)
      .then((response) => setDb(response.data));
  }, []);
  return (
    <div className="section">
      <h1 className="section-heading">{props.name}</h1>
      <div className="section-container">
        {db.map((item) => {
          return (
            <div className="card-container" onClick={props.stateUpdate} id={JSON.stringify(item)} key={item.id}>
              <div
                className="card-img"
                id={JSON.stringify(item)}
                style={{ borderRadius:"5px",backgroundImage:`url("${item.imgURL}")` }}
              ></div>
              <div className="card-name" id={JSON.stringify(item)}>{item.name}</div>
              <div className="card-sub-heading">{item.singer}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section;

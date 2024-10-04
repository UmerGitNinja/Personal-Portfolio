import React from "react";
import preloader from '../../Assets/Preloader.webm'
import "./Preloader.css";
function Preloader({hidden}) {


  return (
    <div className={`Preloader ${hidden ? "Preloaderhidden" : ""}`}>
      <video autoPlay={true} muted controls={false} controlsList="nodownload" preload="auto">
        <source src={preloader} type="video/mp4"/>
      </video>
    </div>
  );
}

export default Preloader;

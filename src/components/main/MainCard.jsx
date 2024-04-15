import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MainCard() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return <div>MainCard</div>;
}

export default MainCard;

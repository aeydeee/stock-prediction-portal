import React from "react";
import Button from "./Button.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          .<h1 className="text-light">Stock Prediction Portal</h1>
          <p className="text-light lead">
            Stock Prediction Portal is a web-based platform designed to help
            users make smarter investment decisions by leveraging the power of
            machine learning and data analytics. The portal provides real-time
            and historical stock data, visual insights, and AI-powered
            predictions to assist investors, researchers, and analysts in
            understanding market trends.
          </p>
          <Button text="Explore Now" class="btn-info" url="/dashboard" />
        </div>
      </div>
    </>
  );
};

export default Main;

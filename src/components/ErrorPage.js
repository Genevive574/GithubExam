import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="errorpage">
      <h1>404 ERROR</h1>
      <p>PAGE NOT FOUND</p>
      <div className="error-page">
        <ul>
          <li>Are you sure the website url is correct</li>
          <li>Check the page spelling and try again</li>
        </ul>
      </div>
      <button onClick={() => navigate("/")}>Go Back Home</button>
    </div>
  );
};

export default ErrorPage;

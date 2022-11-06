import React from "react";
import {Helmet} from "react-helmet-async"

const Home = () => {
    return (
      <div className="home-container">
         <Helmet>
                <title>Home</title>
                <meta name="description" content="my home page" />
                <meta
                    name="keywords"
                    content="react-helmet, altschool africa, github repos, github api, react hooks,"
                />
            </Helmet>
        <h1 className="alt">ALTSCHOOL OF ENGINEERING EXAM NO 1</h1>
        <div className="work">
           <p>
           1. Implement an API fetch of your GitHub portfolio.<br/><br/>
           2. Show a page with a list of all your repositories on GitHub(the page should implement pagination for the repo list).<br/><br/>
           3. Create another page showing data for a single repo clicked from the list of repos using nested routes while using all the necessary tools in react.<br/><br/>
           4. Implement the proper SEO, Error Boundary (show a page to test the error boundary) and 404 pages. Good UI and Designs are important.<br/><br/>
           </p>
        </div>
      </div>
    );
  };
  
export default Home
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import Repos from "./components/Repos";
import ErrorPage from "./components/ErrorPage";
import ErrorBoundary from "./components/ErrorBoundary";
import NestedRoute from "./components/NestedRoute";
import TestError from "./components/TestError";
import {HelmetProvider} from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
       <ErrorBoundary>
       <BrowserRouter>
        <Navbar />
          <Routes>
           <Route path="/" element={<Home />} />
            <Route path="/repos" element={<Repos />} />
            <Route path="repos/:reponame" element={<NestedRoute />} />
            <Route path="*" element={<ErrorPage />} />   
            <Route path="/errortest" element={<TestError/>} />     
          </Routes>
       </BrowserRouter>
       </ErrorBoundary>
       </HelmetProvider>
    </div>
  );
}

export default App;

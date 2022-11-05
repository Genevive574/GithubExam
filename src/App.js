import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import Repos from "./components/Repos";
import ErrorPage from "./components/ErrorPage";
import ErrorBoundary from "./components/ErrorBoundary";
import NestedRoute from "./components/NestedRoute";
import TestError from "./components/TestError";


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

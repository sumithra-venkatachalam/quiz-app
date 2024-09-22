import './App.css';
import Login from "./containers/login/Login.jsx";
import DomainListing from "./containers/domain_listing/DomainListing.jsx";
import QuestionsListing from "./containers/questions_listing/QuestionsListing.jsx"
import MarkListing from "./containers/mark_listing/MarkListing.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UsernameProvider from "./context/UsernameProvider";

function App() {
  return (
        <UsernameProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/domain-listing" element={<DomainListing/>}/>
          <Route path="/questions-listing/:questionId" element={<QuestionsListing/>}/>
          <Route path="/score-listing/:score" element={<MarkListing/>}/>
        </Routes>
        </BrowserRouter>
        </UsernameProvider>
  )
}

export default App

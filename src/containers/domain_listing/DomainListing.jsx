import "./DomainListing.css";
import mockData from "../../utils/mockData.json";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import UsernameContext from "../../context/UsernameContext";
function DomainListing() {

    const {username} = useContext(UsernameContext)

    const navigate= useNavigate();
    
    const goToQuestionsPage = (id) => {
        navigate(`/questions-listing/${id}`)
    }

    const allDomains= mockData.map(x=> (
        <div className="allItems" key={x.id}>
            <img className="domainImage" src={x.domainImage} alt="" />
            <div className="otherThanImage">
            <h1>{x.domainName}</h1>
            {/* <h4>{x.domainDescription}</h4> */}
            <p>Lecturer Name : {x.lecturerName}</p>
            <p>Quiz Level : {x.difficultyLevel}</p> 
            <button className="takeTestButton" onClick={()=>goToQuestionsPage(x.id)}>Start the quiz</button>
            </div>
        </div>
    ))

    console.log("domain",allDomains)

    const handleLogOut = () => {
        navigate("/")
    }

    return(
        <div>
            <div className="header">
                <h1>QuizHUT</h1>
                <div className="header headerRight">
                <h1>Blog</h1>
                <h1>About</h1>
                <h1>Contact Us</h1>
                <i onClick={handleLogOut} className="fa fa-sign-out logoutIcon" aria-hidden="true"></i>
                </div>
            </div>
            <div className="headerBelow">
                <div className="name1">
                <h1 className="searchTitle">How can we help {username}?</h1>
                <input className="search" type="text" placeholder="Search our quiz domains" />
                </div>
                
            </div>
        <div className="cardListing">
            <h1 className="lastText">Quiz Categories</h1>
            <div className="cards">
            {allDomains}
            </div>
        </div>
        <div className="foot">
        <div className="footer">
        <span>Home</span>
        <span>Services</span>
        <span>About</span>
        <span>Terms</span>
        <span>Privacy Policy</span>
         </div>
         <div >
            <h1 className="last">QuizHut @ 2024</h1>
         </div>
         </div>
        
        </div>
    )
}

export default DomainListing;
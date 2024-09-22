import {useParams, useNavigate} from "react-router-dom";
import {useContext} from "react";
import UsernameContext from "../../context/UsernameContext";
import "./MarkListing.css";
import ConfettiExplosion from 'react-confetti-explosion';

function MarkListing() {

    const {username} = useContext(UsernameContext);

    const navigate = useNavigate();

    const handleRestartQuiz = () => {
        navigate("/domain-listing");
    }

    const handleLogout = () => {
        navigate("/")
    }

    const {score} = useParams();

    return(
        <div className="lastOuter">
        <div className="outerScore">
            <div className="scoreAllDetails">
                <p className="firstText">Hurray you have completed the quiz {username}!!</p>
                <ConfettiExplosion
                    particleCount={500}
                    particleSize={10}
                    duration={5000}
                />
                <p className="scoreText">Your score is {score} out of 5 </p>
                <button className="restartButton" onClick={handleRestartQuiz}>Restart Quiz</button>
                <p className="returnToHome" onClick={handleLogout}>Return to Home</p>
            </div>
        </div>
        </div>
    )
}
 
export default MarkListing;
import {useParams} from "react-router-dom";
import mockData from "../../utils/mockData.json";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./QuestionsListing.css";
function DomainListing() {

    const navigate = useNavigate();

    const [selectedValue, setSelectedValue] = useState([
        { id: 1, selectedOption: null },
        { id: 2, selectedOption: null },
        { id: 3, selectedOption: null },
        { id: 4, selectedOption: null },
        { id: 5, selectedOption: null },
    ])

    console.log("where",selectedValue)

    console.log(selectedValue[0].selectedOption)

    const handleOptionChange = (id,index,e) => {
        setSelectedValue((prevValue) => prevValue.map(selectedValue => selectedValue.id === id ? {...selectedValue, selectedOption:e.target.value} : selectedValue))
    }


    const {questionId} = useParams();

    const allDomainQuestions = mockData.find(x => x.id === Number(questionId))
    console.log(allDomainQuestions)
    console.log(questionId)
    console.log(mockData)

    const selectedDomainQuestions = allDomainQuestions.questions;
    console.log(selectedDomainQuestions)

    const domainQuestionsListing = selectedDomainQuestions.map((eachQuestion, questionIndex)=> (
        <div className="list" key={eachQuestion.id}>
            <h2 className="eachQuestion">{eachQuestion.id}. {eachQuestion.currentQuestion}</h2>
            { 
                eachQuestion.options.map((eachOption, index) => (
                    <div className="option" key={index}>
                        <input className="customRadio"
                         type="radio"
                         value={eachOption}
                          id={`${eachQuestion.id}-${index}`} 
                          onChange={(e)=>handleOptionChange(eachQuestion.id, index, e)}
                          checked = {selectedValue[questionIndex].selectedOption === eachOption}
                          /> 
                        <label htmlFor={`${eachQuestion.id}-${index}`}  className="singleOption">{eachOption}</label>
                    </div>
                ))
            }
        </div>
    ))

    console.log("where",selectedDomainQuestions);

    const handleSubmit = () => {
        let score = 0;
        
        selectedValue.forEach((userAns, index) => {
            if(userAns.selectedOption === selectedDomainQuestions[index].correctAnswerValue){
                score++;
            }
        })
        console.log(score);
        navigate(`/score-listing/${score}`)
    }

    const handleExit = () => {
        navigate("/")
    }
    


    return(
        <div className="entirePageOuter">
        <div className="entirePage">
            <div className="headers">
                <p className="right">{allDomainQuestions.domainName}</p>
                <p className="lefts">Total Questions : 5</p>
            </div>
        
            {domainQuestionsListing}
            <div className="quizPageButtons">
            <button className="quizExitButton" onClick={handleExit}>Exit Quiz</button>
            <button className="quizSubmitButton" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
        </div>
    )
} 
export default DomainListing;
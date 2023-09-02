import React, { useEffect, useState } from "react";
import "./index.css";
import logo from "./img/logo.png";
import cross from "./img/cross.png";
import { useNavigate } from "react-router-dom";
import { listQuestions } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

export default function StaffPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listQuestions));
      // Assuming your GraphQL query returns a list of questions under 'items'
      const questionItems = response.data.listQuestions.items;
      
      // Filter out questions with _deleted set to true
      const filteredQuestions = questionItems.filter(question => !question._deleted);
      
      setQuestions(filteredQuestions);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <section className="staff">
      <img src={logo} alt="logo sharehub" />
      <h1 className="dtitle">questions</h1>

      <div className="box-container">
        {questions.map((question, index) => (
          <div 
            className="questions-box"   
            key={index}
            onClick={()=>{
                navigate('/staf-link-special-**dkd*dkdkcmm*-secret-sharehub-secrecyact-cmrsecrecyact-dontshareititsecrett-é&createquestion-question-managerdkdkddpzozov', { state: {  questionsID: question.id  } })
            }}
            >
            <p>{question.question}</p>
          </div>
        ))}
      </div>

      <div
        className="cross-box"
        onClick={() => {
          navigate("/staf-link-special-**dkd*dkdkcmm*-secret-sharehub-secrecyact-cmrsecrecyact-dontshareititsecrett-é&createquestion");
        }}
      >
        <img src={cross} alt="logo sharehub" />
      </div>
    </section>
  );
}

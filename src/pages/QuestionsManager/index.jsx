import React, { useEffect, useState } from "react";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { deleteQuestions, deleteResponse } from "../../graphql/mutations";
import logo from "./img/logo.png";
import delet from "./img/delete.png";


export default function QuestionsManager() {
  const { state } = useLocation();
  const { questionsID } = state;
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuest, setCurrentQuest] = useState({});
  const [loading, setLoading] = useState(false);


  const getQuestions = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listQuestions));
      // Assuming your GraphQL query returns a list of questions under 'items'
      const questionItems = response.data.listQuestions.items;
  
      setQuestions(questionItems);
 
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getQuestions();
    console.log(questions)
  }, []);

  useEffect(() => {
    const getQuestionById = (id) => {
      const question = questions.find((q) => q.id === id);
      setCurrentQuest(question || {}); // Set the found question or an empty object if not found
 
    };
    getQuestionById(questionsID);
 
 
  }, [questions, questionsID]);

  
 
  

  const handleDeleteQuestions = async (questionsID) => {
    try {
      await API.graphql(
        graphqlOperation(deleteQuestions, {
          input: { id: questionsID }, // Provide the response ID to be deleted
        })
      );

      currentQuest.Responses.items.forEach(async(answer)=>{
        await API.graphql(
          graphqlOperation(deleteResponse, {
            input: { id:  answer.id}, // Provide the response ID to be deleted
          })
        );
      });
       // After successful deletion, you can perform additional actions or updates if needed
      console.log("questions deleted successfully!");
      navigate("/staf-link-special-**dkd*dkdkcmm*-secret-sharehub-secrecyact-cmrsecrecyact-dontshareititsecret")
    } catch (error) {
      console.error("Error deleting questions:", error);
    }

  };
  
   
  return (
    <section className="questionsManager">
        <img src={logo} alt="logo sharehub" />

      <div className="headerquest">
        <h2 
        >statistiques</h2>
        <img src={delet} width="" onClick={()=>{
          handleDeleteQuestions(questionsID)
        }}/>

  
      </div>

      <section>
          {
            loading ? (
              <h2>Loading...</h2>
            ) : currentQuest.Responses?.items && Array.isArray(currentQuest.Responses?.items) && currentQuest.Responses?.items.length > 0 ? (
              currentQuest.Responses?.items.map((item) => (
                <div className="Boxvote" 
                    key={item.id}
                   >
                  <p className="text">{item.answer}</p>
                  <p className="text">{item.count}</p>
                </div>
              ))
            ) : (
              <p>No answers to display.</p>
            )
          }

      </section>

    </section>
  );
}



export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            id
            question
            Responses {
                items {
                answer
                count
                id
                 
                }
            }
        }
   

    }
  }
`;
 
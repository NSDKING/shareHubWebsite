import "./index.css";
import logo from "./img/logo.png";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateResponse } from "../../graphql/mutations";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Form() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const getQuestions = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listQuestions));
      const questionItems = response.data.listQuestions.items;
      setQuestions(questionItems);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const handleClicked = async (answer) => {
    console.log("clicked");
    setQuestionIndex(questionIndex + 1);
    let newcount = answer.count + 1;

    const response = await API.graphql(
      graphqlOperation(updateResponse, {
        input: {
          id: answer.id,
          count: newcount,
        },
      })
    );

    console.log(response);

    // Check if questionIndex exceeds the length of questions array
    if (questionIndex >= questions.length - 1) {
      // Navigate to the /home screen when there are no more questions
      navigate("/");
    }
  };

  return (
    <section className="form">
      <img src={logo} alt="logo sharehub" />
      {loading && <h2>Loading...</h2>}
      {!loading && questions.length === 0 ? (
        <h2>No questions available.</h2>
      ) : (
        <>
          <h1 className="dtitles">
            {questions[questionIndex]?.question}
          </h1>

          <section className="r-box">
            {questions[questionIndex]?.Responses?.items &&
            Array.isArray(questions[questionIndex]?.Responses?.items) &&
            questions[questionIndex]?.Responses?.items.length > 0 ? (
              questions[questionIndex]?.Responses?.items.map((item) => (
                <div
                  className="response"
                  key={item.id}
                  onClick={() => {
                    handleClicked(item);
                  }}
                >
                  <p>{item.answer}</p>
                </div>
              ))
            ) : (
              <p>No responses available for this question.</p>
            )}
          </section>
        </>
      )}
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

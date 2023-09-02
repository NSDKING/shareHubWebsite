import React, { useState } from "react";
import "./index.css";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo.png";
import { createQuestions, createResponse } from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

export default function CreateQuestion() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    formState: { errors },
    control,
    handleSubmit,
    register,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "inputs",
  });

  const navigate = useNavigate();

  const handlePress = async (data) => {
    setLoading(true);
    const input = {
      question: data.question,
    };
    const responseQ = await API.graphql(
      graphqlOperation(createQuestions, {
        input: input,
      })
    );

    console.log(responseQ);
    data.inputs.forEach(async (element) => {
      const input = {
        questionsID: responseQ.data.createQuestions.id,
        answer: element,
        count: 0,
      };

      const response = await API.graphql(
        graphqlOperation(createResponse, {
          input: input,
        })
      );
      console.log(response);
    });

    navigate(
      "/staf-link-special-**dkd*dkdkcmm*-secret-sharehub-secrecyact-cmrsecrecyact-dontshareititsecret"
    );
    setLoading(false);
  };

  return (
    <section className="createQuestion">
      <img src={logo} alt="logo sharehub" />

      <form
        onSubmit={handleSubmit((data) => {
          handlePress(data);
        })}
      >
        <h2 className="dtitle">create questions</h2>

        <div className="form-input">
          <input
            {...register("question", { required: "ceci est obligatoire" })}
            type="text"
            placeholder="question posé"
          />
        </div>
        {errors.question && (
          <p className="text-error">{errors.question?.message}</p>
        )}

        {errors.number && <p className="text-error">{errors.number?.message}</p>}

        {fields.map((field, index) => (
          <div key={field.id} className="add-input">
            <div className="form-input">
              <input
                {...register(`inputs.${index}`)}
                placeholder="new question"
              />
            </div>
            <button
              className="remove"
              type="button"
              onClick={() => remove(index)}
            ></button>
          </div>
        ))}

        <button className="button" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Continuer"}
        </button>

        <div className="add" onClick={() => append({})}>
          <p>add</p>
        </div>
      </form>
    </section>
  );
}

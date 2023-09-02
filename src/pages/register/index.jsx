
import "./index.css";
import logo from "./img/logo.png";
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createUser } from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../graphql/queries";

export default function Register() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]); // Initialize users as an empty array
  const navigate = useNavigate();
  const { formState: { errors }, handleSubmit, register } = useForm();

  const handlePress = async (data) => {
     setLoading(true);

    const input = {
      name: data.nom,
      phoneNumber: data.phoneNumber,
    };

    const existantUser = users.find((user) => user.phoneNumber ===  data.phoneNumber);
    
    if(existantUser){

        try {
            await API.graphql(
              graphqlOperation(createUser, {
                input: input,
              })
            );
            navigate("/form");
          } catch (err) {
            console.error("Error creating user:", err);
            setError(true);
          }
      
    }else{
        navigate("/form");
    }

    navigate("/form");

 
    setLoading(false);
  };

  const getUsers = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listUsers));
      const userItems = response.data.listUsers.items;
      setUsers(userItems);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(()=>{
    getUsers()
  },[])

  

  return (
    <section className="register">
      <img src={logo} alt="logo sharehub" />

      <form
        onSubmit={handleSubmit((data) => {
          handlePress(data);
        })}
      >
        <h2 className="dtitle">Quelques petites informations</h2>

        <div className='form-input'>
          <input
            {...register('nom', { required: 'ceci est obligatoire' })}
            type="text"
            placeholder="nom et prenom"
          />
        </div>
        {errors.nom && <p className="text-error">{errors.nom?.message}</p>}

        <div className='form-input'>
          <input
            {...register('phoneNumber', { required: 'ceci est obligatoire' })}
            type="number"
            placeholder="numero de telephone"
          />
        </div>
        {errors.phoneNumber && <p className="text-error">{errors.phoneNumber?.message}</p>}

        <button className="button" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Continuer"}
        </button>
      </form>

      {error && <p className="text-error">An error occurred.</p>}
 

 
    
    </section>
  );
}

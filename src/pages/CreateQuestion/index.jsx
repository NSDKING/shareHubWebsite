import "./index.css"
import { useForm, useFieldArray  } from "react-hook-form";
import { useState} from 'react';
import { useNavigate } from "react-router-dom";
import logo from "./img/logo.png"


export default function CreateQuestion() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const {formState: {errors}, control,handleSubmit, register} = useForm();

    const { fields, append } = useFieldArray({
        control,
        name: "inputs"
      });

    const navigate = useNavigate();

    const handlePress = (data)=>{
        navigate("/form")
    }

    return(
        <section className="createQuestion">
                <h1 className="dtitle">
                    create questions    
                </h1>

                <form                        
             onSubmit={handleSubmit((data=>{
                        handlePress(data)
                    }))}>
                <h2 className="dtitle">Quelques petites informations</h2>

                <div className='form-input'>
                    <input
 
                        {...register('questions', { required: 'ceci est obligatoire'})}
                            type="text"
                            placeholder="nom et prenom"
                        />
                            
                </div>
                {errors.nom && <p className="text-error">{errors.nom?.message}</p>}

                <div className='form-input'>
                    <input
 
                        {...register('number', { required: 'ceci est obligatoire'})}
                            type="number"
                            placeholder="numero de telephone"
                        />
                            
                </div>
                {errors.number && <p className="text-error">{errors.number?.message}</p>}
                


                {fields.map((field, index) => (
                    <>
                        <div className='form-input'>
                            <input 
                                key={field.id} 
                                {...register(`inputs.${index}`)} 
                                
                            />

                        </div>

                    </>

                    ))}
              
                <button
                    className="button"
                    type="submit"

                >continuer</button>

<button  onClick={() => append({})}>
            Add 
        </button>
            </form>
        
   
        </section>
    )

}

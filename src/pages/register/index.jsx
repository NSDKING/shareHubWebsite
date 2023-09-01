import "./index.css"
import logo from "./img/logo.png"
import { useForm } from "react-hook-form";
import { useState} from 'react';
import { useNavigate } from "react-router-dom";




export default function Register() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {formState: {errors}, handleSubmit, register} = useForm();

    const handlePress = (data)=>{
        navigate("/form")
    }
    return(
        <section className="register">
            <img src={logo} alt="logo sharehub" />

            <form                        
             onSubmit={handleSubmit((data=>{
                        handlePress(data)
                    }))}>
                <h2 className="dtitle">Quelques petites informations</h2>

                <div className='form-input'>
                    <input
 
                        {...register('nom', { required: 'ceci est obligatoire'})}
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
                
    
              
                <button
                    className="button"
                    type="submit"

                >continuer</button>
            </form>
            
        </section>
    )

}


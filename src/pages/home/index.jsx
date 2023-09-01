import "./index.css"
import logo from "./img/logo.png"
import room from "./img/room.png"
import sr from "./img/shareRoom.png"
import idea from "./img/idea.png"
import coach from "./img/coaching.png"
import story from "./img/story.png"
import clas from "./img/class.png"
import workshop from "./img/workshop.png"
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();

    return(
        <section className="home">
            <img src={logo} alt="logo sharehub" />
            <div className="i-box">
                <h1 className="dtitle">
                    Qu'est ce que ShareHub?
                </h1>
                <img src={room} alt="logo sharehub" />
                <p className="dtext">
                    ShareHub propose un contenu unique
                    et exceptionel aux professionnels
                    mais aussi aux amoureux du savoir
                    en activité ou non.
                    Une réponse sur mesure à vos
                    besoins professionnels
                </p>    
            </div>

            <div className="i-box">
                <h1 className="dtitle">
                    Un cadre de travail                
                </h1>
                <img src={sr} alt="logo sharehub" />
                <p className="dtext">
                    Une grande salle de 30m2 qui accueille 25 personnes, Une salle de conférence de 20m2 de 10 places assises, Une salle de coworking de 15 m2, Un espace de vie en extérieur de 30m2
                </p>    
            </div>

            
            <div className="i-box">
                <h1 className="dtitles">
                    L’idée
                    “SHARE HUB Days ”
                </h1>
                <img src={idea} alt="logo sharehub" />
                <p className="dtext">
                Ce sont des journées d’échanges, de partage et de motivation. Organisées pour l'amélioration des compétences et performances des professionnels ou non.                </p>    
            </div>

            <div className="c-box">
                <h1 className="dtitle">
                    Nos activités
                </h1>

                <div className="c-box-container">
                                
                    <div className="c-box-item">
                        <img src={coach} alt="logo sharehub" />
                        <h4>coaching</h4>
                        <p>
                            par des coachs professionnels 
                            reconnus
                        </p>
                    </div>

                                                    
                    <div className="c-box-item">
                        <img src={story} alt="logo sharehub" />
                        <h4>Storytelling</h4>
                        <p>
                            par des
                            personnes au
                            parcours
                            inspirant
                        </p>
                    </div>
                                                    
                    <div className="c-box-item">
                        <img src={clas} alt="logo sharehub" />
                        <h4>Masterclass</h4>
                        <p>
                            par des
                            professionnels
                            des métiers en
                            activité ou en
                            retraite
                        </p>
                    </div>

                    <div className="c-box-item">
                        <img src={workshop} alt="logo sharehub" />
                        <h4>Workshop</h4>
                        <p className="end">
                            par des
                            formateurs et/ou
                            des personnes
                            d’
                            expérience  

                        </p>
                    </div>
           
                </div>
 
            </div>


            <div className="b-box">
                        <h1 className="dtitles">
                            Les Rendez-vous
                        </h1>
                        
                        <div className="b-box-container">
                            <div className="b-box-item">
                                <div className="b-box-count">1</div>
                                <p >
                                    Un Mois Huit rendez-vous A compter du mois de Novembre 2023

                                </p>
                            </div>

                            <div className="b-box-item">
                                <div className="b-box-count">2</div>
                                <p>
                                Quatre rendez-vous mensuels Deux Masterclass (3 jours au moins) Deux Workshops (3 jours au plus)
                                </p>
                            </div>

                            <div className="b-box-item">
                                <div className="b-box-count">3</div>
                                <p>
                                Deux Storytelling ( 1 jour au plus) Deux Coaching en développement personnel (2 jours au plus)
                                </p>
                            </div>
                            
                        </div>  
   
            </div>

            <div className="i-box">

                <h1 className="dtitle">
                    comment participer ?              
                </h1>
                
                <p className="dtext">
                    Pour participer aux choix de nos thematiques c’est tres simple cliques sur ce bouton.                
                </p> 

                <button
                    onClick={()=>{
                        navigate("/register")
                    }}
                >
                    participer
                </button>   

            </div>
            

        </section>
    )

}


import "./index.css"
import logo from "./img/logo.png"
import cross from "./img/cross.png"
import { useNavigate } from "react-router-dom";




export default function StaffPage() {
    const navigate = useNavigate();

    return(
        <section className="staff">
            <img src={logo} alt="logo sharehub" />
                <h1 className="dtitle">
                        questions    
                </h1>

            <div className="box-container">

                <div className="staff-box">
                    <p>je ne penese pas ?</p>
                </div>
            </div>

            <div className="cross-box" onClick={
                ()=>{
                    navigate("/staf-link-special-**dkd*dkdkcmm*-secret-sharehub-secrecyact-cmrsecrecyact-dontshareititsecrett-é&createquestion")
                }
            }>
                <img src={cross} alt="logo sharehub" />

            </div>
        </section>
    )

}


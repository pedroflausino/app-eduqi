import { BsEnvelope } from 'react-icons/bs';
import { Home, Email, Welcome } from "./styles";
import { BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function HomeContainer(props) {
    return (
        <Home>
            <Welcome>
                <div id="middleUpContainer">
                    <div id="welcomeAndEmail">
                        <h2>Bem vindo, {props.user.name.split(' ')[0]}</h2>
                        <Email>
                            <BsEnvelope />
                            <span>{props.user.email}</span>
                        </Email>
                    </div>
                    <Link to="checkout">
                        <button><BsPencilFill /></button>
                    </Link>
                </div>
                <p>Com alegria, damos as boas-vindas a Nova Concursos!
                    Estamos comprometidos em ajudá-los a
                    alcançar seus objetivos acadêmicos e profissionais,
                    oferecendo recursos de qualidade,
                    suporte excepcional e uma comunidade acolhedora.
                </p>
            </Welcome>
        </Home>
    );
}

export default HomeContainer;

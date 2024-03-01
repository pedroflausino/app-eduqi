import { HeaderCss, DivLock } from "./styles";
import logo from "../../assets/logoNova.png"
import lock from "../../assets/lock.png"

function Header(){
    return (
        <HeaderCss>
            <a href="https://www.novaconcursos.com.br">
                <img src={logo} alt="Logo Nova Concursos" />
            </a>
            <DivLock>
                <img src={lock} alt="Lock" />
                <p>Site 100% seguro</p>
            </DivLock>
        </HeaderCss>
    )
}

export default Header
import { FooterCss } from "./styles";
import google from "../../assets/google.png"
import RA from "../../assets/RA.png"
import ebit from "../../assets/ebit.png"
import godaddy from "../../assets/godaddy.png"

function Footer(){
    return (
        <FooterCss>
            <img src={ebit} alt="Ebit Ouro" />
            <img src={RA} alt="Certificado RA 1000" />
            <img src={google} alt="Google Site Seguro" />
            <img src={godaddy} alt="Godaddy Verificado e Protegido" />
        </FooterCss>
    )
}

export default Footer
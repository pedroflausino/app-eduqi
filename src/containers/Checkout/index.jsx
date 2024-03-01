import CheckoutContainer from "../../components/CheckoutComponent"
import CheckoutPage from "./styles"

function Checkout(){
    return (
        <CheckoutPage>
            <h1>Complete seus dados pessoais</h1>
            <CheckoutContainer />
        </CheckoutPage>
    )
}

export default Checkout
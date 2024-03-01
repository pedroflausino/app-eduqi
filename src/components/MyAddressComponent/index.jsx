import { MyAddressDiv, Data, LabelData } from "./styles"

function MyAddress(props) {
    return (
        <MyAddressDiv>
            <h2>Meu Endereço</h2>
            <Data>
                <LabelData>
                    <span>CEP</span>
                    <p>{props.user.cep.slice(0, 5)}-{props.user.cep.slice(5, 8)}</p>
                </LabelData>
                <LabelData>
                    <span>Endereço</span>
                    <p>{props.user.address}</p>
                </LabelData>
                <LabelData>
                    <span>Bairro</span>
                    <p>{props.user.district}</p>
                </LabelData>
                <LabelData>
                    <span>Complemento</span>
                    <p>{props.user.complement}</p>
                </LabelData>
                <LabelData>
                    <span>Referência</span>
                    <p>{props.user.reference ? props.user.reference : 'Sem referência'}</p>
                </LabelData>
                <LabelData>
                    <span>Cidade</span>
                    <p>{props.user.city}</p>
                </LabelData>
                <LabelData>
                    <span>Estado</span>
                    <p>{props.user.uf}</p>
                </LabelData>
            </Data>
        </MyAddressDiv>
    )
}

export default MyAddress
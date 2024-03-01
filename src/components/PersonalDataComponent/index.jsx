import { PersonalDataDiv, Data, LabelData } from "./styles"

function PersonalData(props) {
    return (
        <PersonalDataDiv>
            <h2>Dados Pessoais</h2>
            <Data>
                <LabelData>
                    <span>Nome</span>
                    <p>{props.user.name}</p>
                </LabelData>
                <LabelData>
                    <span>E-mail</span>
                    <p>{props.user.email}</p>
                </LabelData>
                <LabelData>
                    <span>CPF</span>
                    <p>{props.user.cpf.slice(0, 3)}.{props.user.cpf.slice(3, 6)}.{props.user.cpf.slice(6, 9)}-{props.user.cpf.slice(9, 11)}</p>
                </LabelData>
                <LabelData>
                    <span>Celular</span>
                    <p>({props.user.phone.slice(0, 2)}){props.user.phone.slice(2, 7)}-{props.user.phone.slice(7)}</p>
                </LabelData>
            </Data>
        </PersonalDataDiv>
    )
}

export default PersonalData
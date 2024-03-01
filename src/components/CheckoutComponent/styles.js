import styled from "styled-components";

export const Checkout = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 185px;
    width: 100%;
`
export const Form = styled.form`
    width: 375px;
    padding: 25px 0;
    row-gap: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 1px 1px 14px -8px #757171;
    button {
        margin: 0 auto;
        margin-top: 15px;
        align-items: center;
        width: 166px;
        height: 46px;
        background: #FCD64B;
        border: none;
        border-radius: 8px;
        font-size: 14px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s, font-weight 0.3s;
        &:hover {
            background: black;
            color: white;
            font-weight: 600px;
        }
    }
    .twoInputsInLine {
        flex-direction: row;
        column-gap: 25px;
        .divsTwoInputsInLine {
            display: flex;
            flex-direction: column;
            row-gap: 8px;
        }
        .longInput {
            width: 70%;
        }
        .shortInput {
            width: 30%;
        }
    }
`
export const LabelAndInput = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    padding: 0 28px;
    input {
        border: none;
        width: 100%;
        height: 36px;
        padding: 10px;
        border-radius: 6px;
        &:focus {
            outline: none;
            box-shadow: 1px 1px 10px -6px #757171;
        }
        &::placeholder {
        color: #B5B5BD;
        font-weight: 500;
        }
    }
    #cepInputDiv {
        flex-direction: row;
        align-items: center;
        column-gap: 15px;
        a {
            font-size: 12px;
            text-decoration: none;
            color: #3754DB;
        }
    }
`

export const Inputs = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    input#cep {
        width: 70%;
    }
    span {
        font-size: 10px;
        color: red;
        font-weight: 600;
        padding: 5px;
    }
`
import styled from "styled-components";

export const Login = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
export const Form = styled.form`
    width: 375px;
    height: 287px;
    padding-top: 25px;
    row-gap: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 1px 1px 14px -8px #757171;
    button {
        margin: 0 auto;
        align-items: center;
        width: 131px;
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
`

export const Inputs = styled.div`
    display: flex;
    align-items: end;
    flex-direction: column;
    svg {
        position: relative;
        bottom: 26px;
        right: 13px;
        cursor: pointer;
        color: #515050;
    }
`
import styled from "styled-components";

export const Home = styled.div`
`
export const Welcome = styled.div`
    box-shadow: 1px 1px 14px -8px #757171;
    width: 468px;
    height: 237px;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    border-radius: 5px;
    padding: 45px 20px 18px 20px;
    h2 {
        font-size: 28px;
        font-weight: 700;
    }
    #middleUpContainer {
        display: flex;
        padding: 0 14px;
        button {
            cursor: pointer;
            margin-left: 18px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            background: #515050;
            svg {
                font-size: 23px;
                color: white;
            }
        }
    }
    p {
        text-align: center;
        color: var(--Theme-Nova-Concursos-Font-Secondary, #515050);
        text-align: center;
        font-feature-settings: 'salt' on;
        font-size: 14px;
        line-height: 162.023%;
    }
`
export const Email = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    span {
        color: #666;
        font-size: 18px;
    }
`
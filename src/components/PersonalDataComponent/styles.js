import styled from "styled-components";

export const PersonalDataDiv = styled.div`
    padding: 44px 0 0 30px;
    height: 485px;
    width: 388px;
    border-radius: 5px;
    border: 1px solid #198B54;
    h2 {
        margin-bottom: 35px;
        font-size: 28px;
        font-weight: bold;
    }
`

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`

export const LabelData = styled.div`
    span {
        font-size: 16px;
    }
    p {
        font-size: 18px;
        font-weight: 600;
    }
`
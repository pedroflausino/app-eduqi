import styled from "styled-components";

export const HeaderCss = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 150px;
    background: #198B54;
`

export const DivLock = styled.div`
    display: flex;
    column-gap: 8px;
    img {
        object-fit: contain;
    }
    p {
        color: #FFF;
        font-size: 14px;
        font-style: normal;
        line-height: 24px;
    }
`
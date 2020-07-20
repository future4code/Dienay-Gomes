import styled from 'styled-components'

export const TopBar = styled.div `
    align-items: center;
    border-bottom: 1px solid #e1e1df; 
    display: flex;
    height: 50px;
    justify-content: center;
    width: 100%;

    span {
        height: 24px;
        width: 24px;

        img {
            width: 24px;
        }
    }
`
export const SpanIcon = styled.span`
    cursor: pointer;
`

export const LogoAstro = styled.img `
    margin: 0 60px;
    height: 30px;
    width: 200px;
`
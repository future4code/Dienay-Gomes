import styled from 'styled-components'

export const TelaLikeNope = styled.div `
    align-items: center;
    background-color: rgba(050, 050, 050, .4);
    border-radius: 4px;
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;

    img {
      transform: rotate(-30deg);
      width: 200px;
      z-index: 1;
    }
`
import styled from 'styled-components'

export const ListTrips = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ul {
        padding: 32px;
    }
    li {
        align-items: center;
        border-bottom: 1px solid #484CAD;
        display: grid;
        font-size: 14px;
        grid-template-columns: 2fr 1fr 1fr 2fr;
    }
`

export const Item = styled.li`
    cursor: pointer;

    :hover {
        background-color: rgba(72, 76, 173, .2);
        transition: 400ms;
    }
`

export const CardDetail = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;

    div > span {
        max-width: 60%;
    }
`
export const Details = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 8px 32px;
    position: relative;
    width: 100%;
`

export const Quit = styled.span`
    cursor: pointer;
    position: absolute;
    right: 8px;
    top: 8px;
`
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

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        padding: 16px;
    }

    li {
        border: 1px solid rgba(72, 76, 173, .2);
        border-radius: 4px;
        list-style: none;
        padding: 8px;
    }
`
export const Details = styled.div`
    border-right: 1px solid rgba(72, 76, 173, .5);
    display: flex;
    flex-direction: column;
    padding: 8px 32px;
    width: 50%;
`

export const Applications = styled.div`
    padding:  8px 32px;
    position: relative;
    width: 50%;

    
`
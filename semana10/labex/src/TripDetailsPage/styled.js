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
    height: 100%;
    width: 100%;

    div > span {
        max-width: 60%;
    }

    ul {
        padding: 0;
        font-size: 14px;
    }

    li {
        border-bottom: 1px solid rgba(72, 76, 173, .2);
        list-style: none;
    }
`
export const Details = styled.div`
    border-bottom: 1px solid rgba(72, 76, 173, .5);
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    width: 98%;
    p {
        font-size: 14px;
        margin-left: 8px;
    }
`

export const CandidatesList = styled.div`
padding: 0 8px;
display: flex;
width: 98%;

`

export const Approved = styled.div`
    border-right: 1px solid rgba(72, 76, 173, .5);
    padding:  0 8px;
    width: 60%;

    li {
        display: grid;
        grid-template-columns: 1fr 0.5fr 1fr 1fr 1fr;
        padding: 4px 0;
    }
    
    p {
        text-decoration: underline;
    }
    
`

export const Applications = styled.div`
    padding:  0 8px;
    width: 40%;

    div {
        display: flex;
        justify-content: space-around;
    }

    button:last-child {
        background-color: red;
    }
`
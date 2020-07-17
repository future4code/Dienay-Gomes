import styled from 'styled-components'

export const ListMatch = styled.div`
    ul {
        padding: 8px;
        height: 470px;
        overflow-y: scroll;
    }

    li {
        align-items: center;
        display: flex;
        cursor: pointer;
        list-style: none;
        padding: 8px;
    }

    li:hover {
        background-color: rgba(113, 214, 182, .2);
        transition: 350ms;
    }

    img {
        border-radius: 50%;
        height: 40px;
        margin-right: 8px;
        object-fit: cover;
        object-position: center;
        width: 40px;
    }
`
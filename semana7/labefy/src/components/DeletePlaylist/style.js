import styled from 'styled-components'

export const ContainerPlayer = styled.div`
align-items: center;
background-color: #282828;
border-radius: 8px;
box-shadow: 0 0 4px #000000;
display: flex;
left: 40%;
padding: 30px 50px;;
position: fixed;
text-align: center;
top: 40%;
z-index: 1;


> button {
    background-color: #cd1a2b;
    border: none;
    border-radius: 30px;
    font-weight: bold;
    color: #b3b3b3;
    height: 30px;
    width: 80px;
}

> button:first-child {
    background-color: #1c1c1c;
    border: 1px solid #b3b3b3;
    margin-right: 16px;
}
`


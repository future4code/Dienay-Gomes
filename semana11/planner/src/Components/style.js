import styled from 'styled-components'

export const Tasks = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 80%;

  .dias {
    border-left: 1px solid rgb(87, 238, 238);
    height: 100%;
  }

  .dias:first-child {
      border-left: none;
  }

  ul {
    height: 100%;
    padding: 4px;
  }

  li {
      list-style: none;
      margin-left: 4px;
      margin-top: 16px;
  }
`
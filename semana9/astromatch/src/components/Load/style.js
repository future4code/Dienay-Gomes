import styled from 'styled-components'

export const Tela = styled.div `
    align-items: center;
    display: flex;
    height: 400px;
    justify-content: center;
    width: 400px;

    .loader {
      position: relative;
}

.outer,
.middle,
.inner {
  border: 3px solid transparent;
  border-top-color: #f04969;
  border-right-color: #71d6b6;
  border-radius: 50%;
  left: 50%;
  position: absolute;
  top: 50%;
}

.outer {
  animation: spin 2s linear infinite;
  height: 3.5em;
  margin-left: -1.75em;
  margin-top: -1.75em;
  width: 3.5em;
}

.middle {
  animation: spin 1.75s linear reverse infinite;
  height: 2.1em;
  margin-left: -1.05em;
  margin-top: -1.05em;
  width: 2.1em;
}

.inner {
  animation: spin 1.5s linear infinite;
  height: 0.8em;
  margin-left: -0.4em;
  margin-top: -0.4em;
  width: 0.8em;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
`

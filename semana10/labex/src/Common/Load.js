import React from 'react'
import styled from 'styled-components'

const Loading = styled.div`
    width: 100%;
    height: 100%;
  .loader {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .outer,
  .middle,
  .inner {
    border: 3px solid transparent;
    border-top-color: #484CAD;
    border-right-color: #484CAD;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .outer {
    width: 3.5em;
    height: 3.5em;
    margin-left: -1.75em;
    margin-top: -1.75em;
    animation: spin 2s linear infinite;
  }

  .middle {
    width: 2.1em;
    height: 2.1em;
    margin-left: -1.05em;
    margin-top: -1.05em;
    animation: spin 1.75s linear reverse infinite;
  }

  .inner {
    width: 0.8em;
    height: 0.8em;
    margin-left: -0.4em;
    margin-top: -0.4em;
    animation: spin 1.5s linear infinite;
  }

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
`
function Load() {
  return (
    <Loading>
        <div class="loader">
            <div class="outer"></div>
            <div class="middle"></div>
            <div class="inner"></div>
        </div>
    </Loading>
  )
}

export default Load

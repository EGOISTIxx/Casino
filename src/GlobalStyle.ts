import { createGlobalStyle } from 'styled-components'

import 'antd/dist/antd.min.css'

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #000000;
  width: 100vw;
}

body {
  margin: 0 auto;
  padding: 0;
  display: flex;
  place-items: start;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
`

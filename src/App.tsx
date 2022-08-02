import { createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { RootStore, store } from './store/RootStore'
import { theme } from './Theme'

export const StoreContext = createContext<RootStore>(
  {} as RootStore
)

const App = () => {
  return (
    <StoreContext.Provider value={{ store }}>
      <ThemeProvider theme={theme}>
        <div>Test</div>
      </ThemeProvider>
    </StoreContext.Provider>
  )
}

export default App

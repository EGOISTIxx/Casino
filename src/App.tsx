import { createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import Roulette from './pages/Roulette/Roulette'
import { RootStore, store } from './store/RootStore'
import { theme } from './Theme'

export const StoreContext = createContext<RootStore>(
  {} as RootStore
)

const App = () => {
  return (
    <StoreContext.Provider value={{ store }}>
      <ThemeProvider theme={theme}>
        <Roulette />
      </ThemeProvider>
    </StoreContext.Provider>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import AppContent from './components/AppContent'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppContent />
    </BrowserRouter>
  )
}

export default App
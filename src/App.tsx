import { Route, Routes } from 'react-router-dom'

import { WeddingSite } from './components/shared/WeddingSite'

function App() {
  return (
    <Routes>
      <Route path="/" element={<WeddingSite />} />
    </Routes>
  )
}

export default App

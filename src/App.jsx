/**
 * App.jsx
 */
import { BrowserRouter } from "react-router-dom"

import { Router } from "./router/Router"
import { LoadDataProvider } from "./provider/LoadDataProvider"

function App() {
  return (
    <>
    <LoadDataProvider>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </LoadDataProvider>
    </>
  )
}

export default App

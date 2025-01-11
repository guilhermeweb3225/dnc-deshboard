import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/"element={<>login</>}></Route>
        <Route path="/cadastro"element={<>login2</>}></Route>
        <Route path="/home"element={<>login3</>}></Route>
        <Route path="/leads"element={<>login3</>}></Route>
        <Route path="/perfil"element={<>login3</>}></Route>
      </Routes>
    </Router>
  )
}

export default App

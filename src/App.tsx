import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./Pages/Signup"
import Signin from "./Pages/Signin"
import CreateWorkspace from "./Pages/CreateWorkspace"
import Home from "./Pages/Home"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/" element={<CreateWorkspace/>}/>
        <Route path="/:workspaceId/:channelId" element={<Home/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App

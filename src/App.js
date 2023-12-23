import { Route, Routes } from "react-router-dom";
import Auth from "./component/auth/Auth";
import Teams from "./component/panel/Teams"
function App() {
  return (
   <>
   <Routes>
    <Route path="/auth/*" element={<Auth/>}/>
    <Route path="/panel" element={<Teams/>}/>
    {/* <Route path="/teams" element={<Teams/>}/> */}
   </Routes>
   </>
  );
}

export default App;

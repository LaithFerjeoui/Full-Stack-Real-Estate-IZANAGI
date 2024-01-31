import {BrowserRouter, Routes, Route} from "react-router-dom"
import Website from "./pages/Website";
import { Suspense } from "react";
import Layout from "./components/Layout";
import Properties from "./pages/Properties";
function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading..</div>}>
    <Routes>
      <Route  element={<Layout />}>
      <Route  path="/" element={<Website/>} />
      <Route path="/properties" element={<Properties/>}/>
      </Route>
    </Routes>
   </Suspense>
    </BrowserRouter>
    
  );
}

export default App;

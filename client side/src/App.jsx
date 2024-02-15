import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./pages/Website";
import { Suspense, useState } from "react";
import Layout from "./components/Layout";
import Properties from "./pages/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property";
import UserDetailContext from "./components/context/UserDetailContext";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import Favorites from "./pages/Favorites";
function App() {
  const queryClient = new QueryClient();

  const [userDetails,  setUserDetails] = useState({
    favorites: [],
    bookings : [],
    token: null
  });
  return (
    <UserDetailContext.Provider value={{userDetails,setUserDetails}}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading..</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Website />} />
              <Route path="/properties">
                <Route index element={<Properties />} />
                <Route path=":propertyid" element={<Property />} />
              </Route>
          <Route path="/favorites" element={<Favorites/>}/>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;

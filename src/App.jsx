import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutUser from "./pages/LayoutUser.jsx";
import LayoutAdmin from "./pages/LayoutAdmin.jsx";
import axios from "axios";
import { data } from "autoprefixer";
function App() {
  const [users, setUsers] = useState([]);
  const [logged, SetLogged] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [products,SetProducts]=useState([]);
  const [deleted,SetDeleted]=useState(false);
  logged;
  const getUsers = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/mazenz",
    }).then(({ data }) => setUsers(data));
  };
  const getUserDetails = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/mazenz/${localStorage.cn}`,
    }).then(({ data }) => setUserDetails(data));
  };
  useEffect(() => {
    if (logged) {
      getUserDetails();
    }
    else{
      localStorage.cn && SetLogged(true)
    }
  }, [logged]);

  const getproducts=()=>{
    axios({
      method:"get",
      url:`http://localhost:3000/products`,
    }).then(({data})=>{
      console.log("Fetched products: ", data); // Add logging
      SetProducts(data);  // Set the fetched user details
    });
  }
  useEffect(()=>{
    if(logged){
      getUserDetails()
    }else{
      localStorage.cn && SetLogged(true);
    }
    
  },[logged])
useEffect(()=>{
  getUsers();
  getproducts();
},[deleted]);
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            <LayoutUser users={users} logged={logged} userDetails={userDetails}  SetLogged={SetLogged} />
          }
        />
        <Route path="/admin/*" element={<LayoutAdmin users={users} products={products} deleted={deleted} SetDeleted={SetDeleted}/>} />
      </Routes>
    </div>
  );
}

export default App;

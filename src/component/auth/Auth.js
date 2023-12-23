import { Card, Tabs } from "@shopify/polaris";
import React, { Suspense, memo, useCallback, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";

const Auth = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  
  const handleTabChange=useCallback((e)=>{
    setSelected(e)
  },[selected])

  useEffect(()=>{ 
    selected===0? navigate("/auth/login"):navigate("/auth/registration") 
  },[selected])

 
console.log(selected)
  const tabs = [
    {
      id: "login",
      content: "Admin",
      panelID: "login",
    },
    {
      id: "user",
      content: "User",
      panelID: "user",
    },
  ];
  return (
    <div style={{ width: "50% ", margin: "0 auto" }}>
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={(e)=>handleTabChange(e)}>
          <Routes>
              <Route
                path="/login"
                element={
                  <Suspense fallback={<h1>Loading....</h1>}>
                    <Login />
                  </Suspense>
                }
              />
              <Route
                path="/registration"
                element={
                  <Suspense fallback={<h1>Loading....</h1>}>
                    <Registration />
                  </Suspense>
                }
              />
            </Routes>
        </Tabs>
      </Card>
    </div>
  );
};

export default memo(Auth);

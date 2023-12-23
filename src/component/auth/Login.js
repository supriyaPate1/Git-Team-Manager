import { Button, Card, FormLayout, Tabs, TextField } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const navigate = useNavigate();

  const handleLogin=()=>{
  if (username==="admin"&& password==="admin@123"){
    navigate("/panel")
  }}
    
  return (
    <React.Fragment>
      <Card>
        <FormLayout>
          <TextField
            label="Username"
            onChange={(e) => {setUsername(e)}}
            value={username}
            autoComplete="off"
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e) => {setPassword(e)}}
          />
          <Button tone="success" variant="primary" onClick={()=>handleLogin()}>Submit</Button>
        </FormLayout>
      </Card>
    </React.Fragment>
  );
};

export default Login;

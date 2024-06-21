import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function PersonalDet() {
    const[perDet,setPerDet]=useState({
        name:"",
        email:"",
        phone:""
    })
    console.log(perDet)
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={5}
    >
      <TextField
        helperText="Please enter your name"
        id="name"
        label="Name"
        name="name"
        value={perDet.name}
        onChange={(e)=>setPerDet({...perDet,[e.target.name]:e.target.value})}
      />
      
      <TextField
        helperText="Please enter your E-mail"
        id="email"
        label="E-Mail"
        name="email"
        value={perDet.email}
        onChange={(e)=>setPerDet({...perDet,[e.target.name]:e.target.value})}
      />
    
      <TextField
        helperText="Please enter your Phone Number"
        id="phno"
        label="Phone Number"
        name="phone"
        value={perDet.phone}
        onChange={(e)=>setPerDet({...perDet,[e.target.name]:e.target.value})}
      />
    </Box>
  );
}

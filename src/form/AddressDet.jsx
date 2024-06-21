import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function AddressDet() {
    const [addDet,setAddDet]=useState({
        add1:"",
        add2:"",
        city:"",
        state:"",
        zip:""
    })
    console.log(addDet);
  return (
    <Box
    
        display="flex"
        flexDirection="column"
        // justifyContent="space-between"
        // minHeight="100vh"
      
    >
      <TextField
        helperText="Address Line 1"
        id="add1"
        label="Line 1"
        fullWidth 
        name="add1"
        value={addDet.add1}
        onChange={(e)=>setAddDet({...addDet,[e.target.name]:e.target.value})}
      />

      <TextField
        helperText="Address Line 2"
        id="add2"
        label="Line 2"
        fullWidth
        name="add2"
        value={addDet.add2}
        onChange={(e)=>setAddDet({...addDet,[e.target.name]:e.target.value})}
      />
      
      <TextField
        helperText="City"
        id="city"
        label="City"
        fullWidth
        name="city"
        value={addDet.city}
        onChange={(e)=>setAddDet({...addDet,[e.target.name]:e.target.value})}
      />
    
      <TextField
        helperText="State"
        id="state"
        label="State"
        fullWidth
        name="state"
        value={addDet.state}
        onChange={(e)=>setAddDet({...addDet,[e.target.name]:e.target.value})}
      />

      <TextField
        helperText="Zip Code"
        id="zip"
        label="Zip Code"
        fullWidth
        name="zip"
        value={addDet.zip}
        onChange={(e)=>setAddDet({...addDet,[e.target.name]:e.target.value})}
      />
    </Box>
  );
}

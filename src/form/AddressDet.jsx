import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function AddressDet({isHidden,setIsHidden}) {
    const [addDet,setAddDet]=useState({
        add1:"",
        add2:"",
        city:"",
        state:"",
        zip:""
    })
    // console.log(addDet);
    const nav=useNavigate();
    useEffect(() => {

        const add1 = localStorage.getItem("add1") || "";
        const add2 = localStorage.getItem("add2") || "";
        const city = localStorage.getItem("city") || "";
        const state = localStorage.getItem("state") || "";
        const zip = localStorage.getItem("zip") || "";
        setAddDet({ add1, add2, city, state, zip });
      }, []);

    const handleSubmit=(e)=>{
        localStorage.setItem("add1",addDet.add1);
        localStorage.setItem("add2",addDet.add2);
        localStorage.setItem("city",addDet.city);
        localStorage.setItem("state",addDet.state);
        localStorage.setItem("zip",addDet.zip);
        nav("/confirm");
    }
  return (
    <Box
    
        display="flex"
        flexDirection="column"
        gap={3}
        // justifyContent="space-between"
        // minHeight="100vh"
        component='form'
        onSubmit={(e)=>handleSubmit(e)}
      
    >
      <TextField
        helperText="Address Line 1"
        id="add1"
        type='text'
        label="Line 1"
        fullWidth 
        name="add1"
        value={addDet.add1}
        onChange={(e)=>setAddDet({...addDet,[e.target.name]:e.target.value})}
        required
      />

      <TextField
        helperText="Address Line 2"
        id="add2"
        type='text'
        label="Line 2"
        fullWidth
        name="add2"
        value={addDet.add2}
        onChange={(e)=>setAddDet({...addDet,[e.target.name]:e.target.value})}
        required
      />
      
      <TextField
        helperText="City"
        id="city"
        type='text'
        label="City"
        fullWidth
        name="city"
        value={addDet.city}
        onChange={(e)=>setAddDet({...addDet,[e.target.name]:e.target.value})}
        required
      />
    
      <TextField
        helperText="State"
        id="state"
        type='text'
        label="State"
        fullWidth
        name="state"
        value={addDet.state}
        onChange={(e)=>setAddDet({...addDet,[e.target.name]:e.target.value})}
        required
      />

      <TextField
        helperText="Zip Code"
        id="zip"
        type='tel'
        label="Zip Code"
        fullWidth
        name="zip"
        value={addDet.zip}
        onChange={(e)=>setAddDet({...addDet,[e.target.name]:e.target.value})}
        required
      />
    <div style={{textAlign:'center'}}>
            <Button
              className="button"
              variant="contained"
              sx={{ backgroundColor: 'lightgrey', color:'black',width:'40%',marginTop:'6%' ,marginRight:'20px'}}
              onClick={()=>setIsHidden(!isHidden)}
            >
              Back
            </Button>

            <Button
              className="button"
              variant="contained"
              sx={{ backgroundColor: 'lightgrey', color:'black',width:'40%',marginTop:'6%'}}
              type='submit'
            >
              Confirm
            </Button>
    </div>
        
    </Box>
  );
}

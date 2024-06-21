import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

export default function PersonalDet({ isHidden, setIsHidden }) {
  const [perDet, setPerDet] = useState({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {

    const name = localStorage.getItem("name") || "";
    const email = localStorage.getItem("email") || "";
    const phone = localStorage.getItem("phone") || "";
    setPerDet({ name, email, phone });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem("name", perDet.name);
    localStorage.setItem("email", perDet.email);
    localStorage.setItem("phone", perDet.phone);
    setIsHidden(!isHidden);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={5}
      component='form'
      onSubmit={handleClick}
    >
      <TextField
        helperText="Please enter your name"
        id="name"
        type="text"
        label="Name"
        name="name"
        value={perDet.name}
        onChange={(e) => setPerDet({ ...perDet, [e.target.name]: e.target.value })}
        required
      />
      
      <TextField
        helperText="Please enter your E-mail"
        id="email"
        type="email"
        label="E-Mail"
        name="email"
        value={perDet.email}
        onChange={(e) => setPerDet({ ...perDet, [e.target.name]: e.target.value })}
        required
      />
    
      <TextField
        helperText="Please enter your Phone Number"
        id="phno"
        type="tel"
        label="Phone Number"
        name="phone"
        value={perDet.phone}
        onChange={(e) => setPerDet({ ...perDet, [e.target.name]: e.target.value })}
        required
      />

      <div style={{ textAlign: 'center' }}>
        <Button
          className="button"
          variant="contained"
          sx={{ backgroundColor: 'lightgrey', color: 'black', width: '50%' }}
          type="submit"
        >
          Next
        </Button>
      </div>
    </Box>
  );
}

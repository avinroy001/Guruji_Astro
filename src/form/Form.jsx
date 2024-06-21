import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonalDet from './PersonalDet';
import AddressDet from './AddressDet';

import { useState } from 'react';
export default function Form() {
    const[isHidden,setIsHidden]=useState(false)
  return (
    <div>
      <Accordion defaultExpanded hidden={isHidden}
      sx={{borderRadius:'10px'}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: 'lightgrey' ,borderRadius:'10px'}}
        >
          <Typography
          sx={{fontSize:'2rem',fontWeight:'800'}}
          >Personal Details</Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{textAlign:'center',marginTop:'20px'}}
        >
          <PersonalDet isHidden={isHidden} setIsHidden={setIsHidden}/>
          
        </AccordionDetails>
      </Accordion>
      <Accordion hidden={!isHidden} defaultExpanded
       sx={{borderRadius:'10px'}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: 'lightgrey' ,borderRadius:'10px'}}
        >
          <Typography
          sx={{fontSize:'2rem',fontWeight:'800'}}
          >Address Details</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{textAlign:'center' ,marginTop:'20px'}}>
          <AddressDet isHidden={isHidden} setIsHidden={setIsHidden}/>
          
          
           
        </AccordionDetails>
      </Accordion>

      
    </div>
  );
}

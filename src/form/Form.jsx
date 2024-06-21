import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonalDet from './PersonalDet';
import AddressDet from './AddressDet';

export default function Form() {
  return (
    <div>
      <Accordion defaultExpanded
      sx={{ borderRadius:10 ,border: 1,borderColor:"blue"}
    }
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: 'lightblue' }}
        >
          <Typography
          sx={{fontSize:'2rem',fontWeight:'800'}}
          >Personal Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PersonalDet/>
        </AccordionDetails>
      </Accordion>
      <Accordion 
       sx={{ border: 1,borderColor:"blue"}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: 'lightblue' }}
        >
          <Typography
          sx={{fontSize:'2rem',fontWeight:'800'}}
          >Address Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AddressDet/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

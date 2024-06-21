import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import styles from "./Submit.module.css";
import { useState } from 'react';
import { useEffect } from 'react';
export default function Submit() {
    const[isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },2000)
    },[])
  return (
    <div className={styles.submit}>
        {isLoading?(<Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress sx={{ color: 'orange' }} />
    </Stack>):(<h1>Details Submitted</h1>)}
    </div>
    
  );
}


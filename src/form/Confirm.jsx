import React from 'react'
import styles from "./Confirm.module.css";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Confirm = () => {
    const nav=useNavigate();
  return (
    <div className={styles.wrapper}>
        <p>This is the confirmation screen</p>
        <p>You can either confirm your entries or choose to go back to modify them.</p>
        <hr/>
        <h3>Detailes</h3>
        <hr/>
        <div>
            <div className={styles.content}>
                <div>
                    Name:
                </div>

                <div>
                    {localStorage.getItem("name")}
                </div>
            </div>
            <div className={styles.content}>
                <div>
                    E-mail:
                </div>

                <div>
                    {localStorage.getItem("email")}
                </div>
            </div>
            <div className={styles.content}>
                <div>
                    Phone Number:
                </div>

                <div>
                    {localStorage.getItem("phone")}
                </div>
            </div>
            <div className={styles.content}>
                <div>
                    Address Line 1:
                </div>

                <div>
                    {localStorage.getItem("add1")}
                </div>
            </div>
            <div className={styles.content}>
                <div>
                    Address Line 2:
                </div>

                <div>
                    {localStorage.getItem("add2")}
                </div>
            </div>
            <div className={styles.content}>
                <div>
                    City:
                </div>

                <div>
                    {localStorage.getItem("city")}
                </div>
            </div>
            <div className={styles.content}>
                <div>
                    State:
                </div>

                <div>
                    {localStorage.getItem("state")}
                </div>
            </div>
            <div className={styles.content}>
                <div>
                    Zip Code:
                </div>

                <div>
                    {localStorage.getItem("zip")}
                </div>
            </div>
        </div>

        <div style={{textAlign:'center'}}>
            <Button
              className="button"
              variant="contained"
              sx={{ backgroundColor: 'lightgrey', color:'black',width:'40%',marginTop:'6%' ,marginRight:'20px'}}
              onClick={()=>nav("/")}
            >
              Back
            </Button>

            <Button
              className="button"
              variant="contained"
              sx={{ backgroundColor: 'lightgrey', color:'black',width:'40%',marginTop:'6%'}}
              onClick={()=>nav("/submit")}
            >
              Submit
            </Button>
        </div>
    </div>
  )
}

export default Confirm
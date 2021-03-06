import React, { useState,useEffect,useRef } from 'react'
import { useParams } from 'react-router'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import "./UsersDetail.css"
import spacing  from '@material-ui/system';
import {Link} from "react-router-dom"
import Grid from '@material-ui/core/Grid';
import flash from "./flash.svg"
import { ToastContainer, toast } from "react-toastify";
import Loading from "../Hoc/Loading"
import "react-toastify/dist/ReactToastify.css";
const CardDetail = ({data,...props}) => {
    const inputElement = useRef(null);
console.log(props.history);
    useEffect(() => {
      if (inputElement.current) {
        inputElement.current.focus();
      }
    }, []);

        
    return (
       
           <div>
                <ToastContainer/>
        <Grid container>
            <Grid item xs={12}>

       
            <Grid item xs={12}><Link to={"/"} className="link"> <img src={flash} className="flash"/> </Link></Grid>
            
           <Paper className="paper" p={2} >
           <Grid item xs={12} >
                <img src={data.avatar} className="img" />
                </Grid>
                <form  className="form" >
            <label > name : </label>
                     <TextField className="main" 
                id="standard-read-only-input"

               
                value={data.firstname}
                InputProps={{
                    readOnly: true,
                }}
           
                /> 
                 <label > last name : </label>
                     <TextField className="main" padding={3}
                id="standard-read-only-input"

                value={data.lastname}
                
                InputProps={{
                    readOnly: true,
                }}
                /> 
                 <label > phone : </label>
              <TextField className="main"
                id="standard-read-only-input"

                value={data.phone}
                
                InputProps={{
                    readOnly: true,
                }}
                /> 
                    <label > company : </label>
                 <TextField className="main"
                 inputRef={inputElement}
                id="standard-read-only-input"

                value={data.company}
                
                InputProps={{
                    readOnly: true,
                }}
                /> 
                    <label > email : </label>
                 <TextField className="main" 
                id="standard-read-only-input"
                value={data.email}
                
                InputProps={{
                    readOnly: true,
                }}
                /> 
      

                </form>
            </Paper>
            </Grid>
            </Grid>
        
        </div> 

       
    )
   
}
export default Loading(
    CardDetail,
    `https://60bf8aba97295a0017c432ab.mockapi.io/users/`
  );

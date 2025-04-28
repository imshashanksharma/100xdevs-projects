import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import {Card} from "@mui/material";
import { useState } from 'react';
import axios from 'axios';

function Signup(){
    const [email,setemail] = useState("")
    const [password,setPassword] = useState("")
    return(
        <div>
            
            <div style = {{
                paddingTop : 100,
                marginBottom : 60,
                display : "flex",
                justifyContent : "center"
            }}>
                <Typography variant='h4'>
                Welcome to course page
                <br/>
                <div style = {{
                    marginLeft : 80
                }}>
                Signup below
                </div>
                
                </Typography>
            </div>


            <div style ={{
                display : "flex",
                justifyContent : 'center'
            }}>
            <Card variant = "outlined" style = {{width : 400,padding : 40}}>
                
            <TextField
            onChange={(e) => {
                setemail(e.target.value);
            }}
            fullWidth={true}
            label="Email" 
            variant="outlined" 
            />
            <br/><br/>

            <TextField
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            fullWidth={true} 
            label="Password" 
            variant="outlined" 
            type = {"password"}
            />

            <br/>
            <br/>
            <div style = {{
                display : "flex",
                justifyContent : 'center' 
            }}>
            <Button size = {"large"} 
            variant="contained" 
            onClick={async() => {
                // function callback2(data){
                //     // console.log(data);
                //     debugger
                //     localStorage.setItem("token",data.token)
                // }
                // function callback1(res){
                //     debugger
                //     res.json().then(callback2);
                // }
                // // fetch is a way to send req from frontend to backend  
                // fetch("http://localhost:3000/admin/signup",{
                //     method : "POST",
                //     body : JSON.stringify({
                //         username:email,
                //         password:password
                //     }),
                //     headers : {
                //         "Authorization" : "Bearer " + localStorage.getItem("token"),
                //         "Content-type" : "application/json"
                        
                //     } // when the middleware at the backend recieves this header then it parses the username and password
                //     // headers helps to parse the body correctly in the backend
                // })
                // .then(callback1)

                // async await mehtod for the same thing -- 
                
                // whenever using await method put async to the close opening barce as done above
            //     const response = await axios.post("http://localhost:/admin/signup") {
            //         username : email,
            //         password : password
            //     } // used await because it waits till the response comes and then proceeds further
            //     let data = response.data;
            //     localStorage.setItem("token",data.token);
            //     window.location = "/"
            // )}

                // axios method below 
                function callback1(response){
                    let data = response.data;
                    localStorage.setItem("token",data.token);
                    window.location = "/"
                }
                axios.post("http://localhost:3000/admin/signup" , {
                    username : email,
                    password : password
                }).then(callback1);


            }}
            >Sign up</Button>
            </div>
            
            </Card>
            </div>
        </div>
    )
}


export default Signup
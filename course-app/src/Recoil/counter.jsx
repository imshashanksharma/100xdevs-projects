// Prop Drilling in React is when you pass data (props) from a parent component to a deeply nested child component,
//  even if intermediate components don’t need it.

// Example:
// Parent has data but needs to pass it to Grandchild.
// It first passes the data to Child, which then passes it to Grandchild.
// The Child doesn't use the data but has to pass it along.


import { createContext, useContext, useState } from "react";
import {Button,Card,Typography} from '@mui/material'


function app(){
    const[count,setcount] = useState(0);
    return(
        <div style = {{display:"flex",justifyContent:"center"}}>
            <Card style = {{padding : 20,width : 500}}>
                <Typography variant = "h5">Welcome to the counter game</Typography>
                <br/>
                <Buttons count = {count} setcount = {setcount}/>
                <CountComponent count = {count}/>
            </Card>
        </div>
    )
}

function Buttons({count,setcount}){
    return <div style = {{display : "flex", justifyContent : "space-between"}}>
        <Increase count = {count}  setcount = {setcount}/>
        <Decrease count = {count} setcount = {setcount}/>
    </div>
}

function Increase({count,setcount}){
    return <div>
        <Button variant = {"contained"} onClick = {() => {
            setcount(count + 1)
        }}>Increase counter</Button>
    </div>
}

function Decrease({count,setcount}){
    return <div>
        <Button variant = {"contained"} onClick = {() => {
            setcount(count - 1)
        }}>Decrease counter</Button>
    </div>
}

function CountComponent({count}){
    return <div>
        <Typography variant = 'h5' textAlign = {"center"}>
            {count}
        </Typography>
    </div>
}

// so basically here we have defined count and set count as use state at one component but we only need it to render once 
// in the final component 

// so this is prop drilling we have defined a var at the top of the function/component but we dont need it till the end
// and as we need it in the end we just pass it all along which increase the total renders that happen on a specific 
// web page which is a very expensive operation 




// context api in react to solve prop drilling --- 
import { useState } from "react";
import {Button,Card,Typography} from '@mui/material'

// here im react context apis/contexts what we do is --- 
// instead of passing the variables we define them in context and tell react that -- 
// i am not going to pass it down the function/prop chain u just bring this variable whenever we need them 
// here we need them in increase and decrease 
const CountContext = createContext();

function app(){
    const[count,setcount] = useState(0);
    return(
        <CountContext.Provider value = {{
            count : count,
            setcount : setcount
        }}>
        <div style = {{display:"flex",justifyContent:"center"}}>
            <Card style = {{padding : 20,width : 500}}>
                <Typography variant = "h5">Welcome to the counter game</Typography>
                <br/>
                <Buttons />     now we dont need to pass count and set count //count = {count} setcount = {setcount}
                <CountComponent/> here also no need  //count = {count}/>
            </Card>
        </div>
        </CountContext.Provider>
    )
}

function Buttons(){
    return <div style = {{display : "flex", justifyContent : "space-between"}}>
        <Increase />
        <Decrease />
    </div>
}

function Increase(){
    // whenever u need that value just use this to tell react -- hey i need that val
    const{count,setcount} = useContext(CountContext);
    return <div>
        <Button variant = {"contained"} onClick = {() => {
            setcount(count + 1)
        }}>Increase counter</Button>
    </div>
}

function Decrease(){
    return <div>
        <Button variant = {"contained"} onClick = {() => {
            setcount(count - 1)
        }}>Decrease counter</Button>
    </div>
}

function CountComponent(){
    return <div>
        <Typography variant = 'h5' textAlign = {"center"}>
            {count}
        </Typography>
    </div>
}

export default app;



// react recoill -- npm install recoil 

// here wrap the main function component inside a recoil wrapper 
// also we have to define a atom which is a kind of state 
import { createContext, useContext, useState } from "react";
import {Button,Card,Typography} from '@mui/material'


function app(){
    //const[count,setcount] = useState(0);
    return(
        <RecoilRoot>
        <div style = {{display:"flex",justifyContent:"center"}}>
            <Card style = {{padding : 20,width : 500}}>
                <Typography variant = "h5">Welcome to the counter game</Typography>
                <br/>
                <Buttons />
                <CountComponent />
            </Card>
        </div>
        </RecoilRoot>
    )
}

function Buttons(){
    return <div style = {{display : "flex", justifyContent : "space-between"}}>
        <Increase />
        <Decrease />
    </div>
}

function Increase(){
    const setcount = useSetRecoilState(countState);
    return <div>
        <Button variant = {"contained"} onClick = {() => {
            setcount(exisitingcount => exisitingcount + 1);
        }}>Increase counter</Button>
    </div>
}

function Decrease(){
    const setcount = useSetRecoilState(countState);
    return <div>
        <Button variant = {"contained"} onClick = {() => {
            setcount(exisitingcount => exisitingcount - 1);
        }}>Decrease counter</Button>
    </div>
}

function CountComponent({count}){
    const count = useRecoilValue(countState)
    return <div>
        <Typography variant = 'h5' textAlign = {"center"}>
            {count}
        </Typography>
    </div>
}


const countState = atom({
    key : 'countState',
    default : 0,
});




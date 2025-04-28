import { useEffect, useState } from "react";

function Courses(){
    const[courses,setCourses] = useState([]);
    useEffect(() => {
        // function callback2(data){
        //     setCourses(data.courses);
        // }
        // function callback1(res){
        //     res.json().then(callback2)
        // }
        // fetch("http://localhost:3000/admin/courses", {
        //     method : "GET",
        //     headers : {
        //         "Authorization" : "Bearer" + localStorage.getItem("token"),
        //     }
        // }).then(callback1)
        axios.get("http://localhost:3000/admin/courses", //+ //courseId,{
            method : "GET",
            headers:{
                "Authorization" : "Bearer" + localStorage.getItem("token")
            }
        }).then(res => {
            setCourses(res.data.courses);
        });
    }, []);
    // here we are using .then function and not using async await becuase if we use await then we have to async in front 
    // of the useEffect function which we cannot 
    // so basically we cannot use async in front of use effect


    if(!courses.length()){
        return <>Loading...</>
    }

    //JSON.stringify(courses) inside the return div 
    return <div>
        Courses
        {courses.map(course => {
            return <Course course = {course} />
        })}
    </div>
} // we are iterating over the courses over here and from here it is send to the function course through props

// return <div style = {{display:"flex",flexWrap:"wrap",justifyContent:"center"
// }}>

//     <Course course = {course[0]} />
//     <Course course = {course[1]} />


// </div>



function Course(props){
    return <div>
        {props.course.title}
    </div>
}


// method to display course in card form -- 
// export function Course(props){
//     const navigate = useNavigate();

//     return <Card style = {{
//         margin : 10,
//         width : 200,
//         minHieght : 300,
//         padding : 20
//     }}>
//         <Typography  textAlign : {"center"} variant = "h5">{props.course.title}</Typography>
//         <Typography  textAlign : {"center"} variant = "h5">{props.course.description}</Typography>
//         <img src = {props.course.imagelink} style = {{width:300}}></img>
//         <div>
//         <Button variant = "contained" size = "large" onClick = {() => {
//             navigate("/courses" + props.course._id); // when the button is clicked navigate to /courses with the courseid
//             // here we have written _id because mongodb stores  id as _id
//         }}>Edit</Button> 
//         </div>
        
//     </Card>
// }

// here vw is viewport width meaning the percentage area which the background will be taking so whenever shriking the 
// webpage it will change accordingly 
// zindex -- gives index to overllaping things and the one with higher index is displayed one at the top of the other 
// one with the lower index
function graytopper({title}){
    return <div style={{height : 250 , background : "#212121" , top: 0 ,width : "100vw", zIndex:0,}}>

    </div>
}

export default Courses;

// will add notes
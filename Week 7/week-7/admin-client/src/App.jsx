import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import Appbar from "./components/Appbar.jsx";
import AddCourse from "./components/AddCourse.jsx";
import Courses from "./components/Courses";
import Course from "./components/Course";
import {Landing} from "./components/Landing.jsx";
import { userState } from "./store/atoms/user.js";
import {
    RecoilRoot,
    useSetRecoilState
} from 'recoil';
import axios from "axios";
import {BASE_URL} from "./conf ig.js";
import {useEffect} from "react";

//general knowledge -- 
// in the app.js folder we are rendering the landing page and the appbar and the other components 
// so if a state variable is defined in a component (example -- email var in appbar (if user logged in show email else 
// tell to login) and if want to use the variable in other component we cannot use because a var cannot be passed up the chain
// it can be passed down the chain like props through a function)
// so if we want to acess the same variable in the landing page file we have two options either define the whole thing 
// which is the user email and then send a fetch/get request and do the same thing again (because the variables cannot be 
// passed up the chain it can be passed down by using prop chaining sending variables via a function (prop chaining method))

function App() {
    return (
        <RecoilRoot>
            <div style={{width: "100vw",
                height: "100vh",
                backgroundColor: "#eeeeee"}}
            >
                    <Router>
                        <Appbar />
                        <InitUser />
                        <Routes>
                            <Route path={"/addcourse"} element={<AddCourse />} />
                            <Route path={"/course/:courseId"} element={<Course />} />
                            <Route path={"/courses"} element={<Courses />} />
                            <Route path={"/signin"} element={<Signin />} />
                            <Route path={"/signup"} element={<Signup />} />
                            <Route path={"/"} element={<Landing />} />
                        </Routes>
                    </Router>
            </div>
        </RecoilRoot>
    );
}


function InitUser() {
    const setUser = useSetRecoilState(userState);
    const init = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/admin/me`, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })

            if (response.data.username) {
                setUser({
                    isLoading: false,
                    userEmail: response.data.username
                })
            } else {
                setUser({
                    isLoading: false,
                    userEmail: null
                })
            }
        } catch (e) {

            setUser({
                isLoading: false,
                userEmail: null
            })
        }
    };

    useEffect(() => {
        init();
    }, []);

    return <></>
}

export default App;
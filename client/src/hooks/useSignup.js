import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useSignup = ()=>{
    const path = 'https://i-book-backend.onrender.com'
    // const PATH = 'http://localhost:8000'
    const PATH = process.env.REACT_APP_PATH_TO_BACKEND;
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const signup= async (email, password, username)=>{
        setIsLoading(true);
        setError(null)
        try{
            console.log("email = ", email)
            console.log("password = ", password)
            console.log("username = ", username)
            const response = await axios.post(`${PATH}/api/auth/register`, {email:email, username:username, password:password})
            console.log(response.data);
            setIsLoading(false); 
            navigate('/login')
        }catch(err)
        {
            console.log(err.response.data);
            setError(err.response.data)
            setIsLoading(false);
        }
    }

    return {signup, error, isLoading};
}
import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axiosWithAuth from '../Utils/axiosWithAuth';

const Logout = () => {
    const {push} = useHistory()

    useEffect(() => {
        axiosWithAuth().post("/logout")
        .then(res => {
            localStorage.removeItem("token")
            push("/login")
        })
        .catch(res => {
            console.log(res)
        })
    })
    return(
        <div></div>
    )
}
export default Logout; 
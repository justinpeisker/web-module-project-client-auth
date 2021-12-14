import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axiosWithAuth from '../Utils/axiosWithAuth';

const AddFriend = () => {

    const [form, setForm] = useState({
        name:'',
        age: '',
        email: '',
    })

    const {push} = useHistory();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post("/friends")
        .then(res => {
            push("/friends")
        })
        .catch(err => {
            console.log(err)
        })
    };

    return(
        <div>
            <h1>add friend</h1>
            <form onSubmit= {handleSubmit}>
                <div>
                    <label htmlFor= "name">Name:</label>
                    <input 
                        onChange= {handleChange} 
                        id= "name"
                        name= "name" />
                </div>
                <div>
                    <label htmlFor= "age">Age:</label>
                    <input 
                        onChange= {handleChange} 
                        id= "age" 
                        name= "age"/>
                </div>
                <div>
                    <label htmlFor= "email">Email:</label>
                    <input 
                        onChange= {handleChange} 
                        id= "age" 
                        name= "email"/>
                </div>
                <button> Submit </button>
            </form>
        </div>
    )
}
export default AddFriend;
import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddReview = () => {

    const { register, handleSubmit, reset, } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:4500/addreview',data)
         .then(res => {
             console.log(res);
        if(res.data){
            alert('Product added')
            reset()
        }
    })
    }
    return (
        <div className='my-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder='Your name' />
             <br /> <br />
            <input {...register("img" ,{required: true})} placeholder='Your image url' /> 
            <br /> <br />
            <input type="number" {...register("rating",{ required: true, maxLength: ">5" })} placeholder='Rating'  /> 
            <br /> <br />
            <textarea {...register("review", { required: true, maxLength: 2000 })} placeholder='Review' /> <br /> <br />
            <input type="submit" />
        </form>
    </div>
    );
};

export default AddReview;
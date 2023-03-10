import './index.css';
import React from 'react';


//useState is function
//use  is used to call hooks
//return array([value, f])
//mandate to use hooks inside function/ component
//Component must be in UpperCase
//
const UseStateBasic =()=>{
   // let title ='react is best';
    const [message, setMessage]=React.useState('react is best');
    
    const changedRes=()=>{
         setMessage('React is easy Play around code');
    }
    return (
        <>
    <h2>{message}</h2>
    <button className='btn' onClick={changedRes}>Change</button>
    </>
    );
}
export default UseStateBasic;

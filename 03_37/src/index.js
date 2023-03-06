import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

function Jaga() {
    return <div>
     <h1>Types of cloths</h1> 
     <Shirts/>
     <Shirts/>   
     <Shirts/>   
     </div>
}

const Shirts = () => {
    return <div>
        <h2>Full slevees</h2>
        <img src='https://m.media-amazon.com/images/I/81EqA--jXFL._AC_UL320_.jpg' alt='Sorry no image'></img>
        <h3>Denim Co. Men Casual Shirt</h3>
        </div>
}

ReactDOM.render(<Jaga/> , document.getElementById('root'))




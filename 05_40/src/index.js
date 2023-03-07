/*code for total thing in one file
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const BookList =[
    {
      id:1,
     img:'https://m.media-amazon.com/images/I/71A-8Cr9cxL._AC_UY436_FMwebp_QL65_.jpg',
     title:'Blockchain Technology: Concepts and Applications',
      author:'Kumar Saurabh and Ashutosh Saxena'
    }
    ,{
      id:2,
     img:'https://m.media-amazon.com/images/I/61ItRb1o7nL._AC_UY436_FMwebp_QL65_.jpg',
     title:'MASTERING BITCOIN 2/ED PROGRAMMING THE OPEN BLOCKCHAIN',
      author:'Andreas M. Antonopoulos '
    }
    
    ,{
      id:3,
     img:'https://m.media-amazon.com/images/I/51i0-FJQZjL._AC_UY436_FMwebp_QL65_.jpg',
     title:'BLOCKCHAIN',
      author:'Don Tapscott'
    }
    ,{
      id:4,
     img:'https://m.media-amazon.com/images/I/51i0-FJQZjL._AC_UY436_FMwebp_QL65_.jpg',
     title:'BLOCKCHAIN',
      author:'Don Tapscott'
    }
    ];

function Books(){
  return <section className='bookList'> {BookList.map( (book)=>{
    const {img, title, author}=book;
    return (
        <Image key={book.id} {...book}></Image>
    )
  })} </section>
  }

const Image =({img,title,author}) => {
//   const {img,title,author}=props;
  return(
  <article classname = 'books'>
    <img src ={img} alt=""/>
    <h2>{title}</h2>
    <h4>{author}</h4>

  </article>);
}

ReactDOM.render(<Books/>, document.getElementById('root'));*/

/* maps example
// import React from 'react'
// import ReactDOM from 'react-dom'

// const skills = ["JAVASCRIPT","SOLIDITY","REACT"]
// const updatedskills = skills.map((anyname)=>{
//     return <h2>{anyname}</h2>
// })

// function Ice (){ return (<div>{updatedskills}</div>)}

// ReactDOM.render(<Ice/> , document.getElementById('root'))*/
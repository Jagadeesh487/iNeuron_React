import React from 'react'
import ReactDOM from 'react-dom'

const BookList1 = {
  Images:'https://m.media-amazon.com/images/I/41OkwB-uDWL.jpg',
  Title:'Sollobell Men Cutaway Collar Plain Dark Blue Full Sleeve Casual Denim Shirt',
  Author:'Sollobell'
}

const BookList2 = {
  Images:'https://m.media-amazon.com/images/I/618Wek95laS._UL1440_.jpg',
  Title:'This sis shirt',
  Author:'soooe'
}

function Books() {
  return(
    <section className='bookList'>
      <Image 
      img = {BookList1.Images}
      title = {BookList1.Title}
      author = {BookList1.Author}>
      </Image>
      <Image
      img = {BookList2.Images}
      title = {BookList2.Title}
      author = {BookList2.Author}
      ></Image>
    </section>
  )
}

const Image = ({img,title,author}) => {
  return (
    <article 
    >
      <h2>{title}</h2>
      <img src={img} alt=""/>      
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<Books/>,document.getElementById("root"))
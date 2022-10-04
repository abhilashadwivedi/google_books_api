import React from "react";
const Card = ({ book }) => {
  console.log(book)
  return (
    <>
      {book.map((item) => {
        let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        return (
            <>
          <div className="card">
            <img src={thumbnail} alt="" />
            <div className="bottom">
              <h3 className="title">React Js</h3>
              <p className="amount">&#8377;3290</p>
            </div>
          </div>
          </>
        )
      })
      }
    </>
  )
}

export default Card;

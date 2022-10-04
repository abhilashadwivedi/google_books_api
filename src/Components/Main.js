import react, { useState } from "react";
import Card from "./Card"
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            const api=`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}&maxResults=40`;
            axios.get(api)
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
        <div className="header">
            <div className="row1">
                <h1>A room without books is like<br/> a body without a soul</h1>
            </div>
            <div className="row2">
                <h2>Find Your Book</h2>
                <div className="search">
                    <input type="text" placeholder="Enter your Book Name" 
                    value={search} onChange={e=>setSearch(e.target.value)}
                    onKeyPress={searchBook}/>
                    <button></button>
                </div>
                <img src="./images/bg2.png" alt="" />
            </div>
        </div>
            <div className="container">
                {
                    <Card book={bookData}/>
                }
                </div>
        </>
    )
}
export default Main;
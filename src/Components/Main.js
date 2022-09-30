import react, { useState } from "react";
import Card from "./Card"
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const searchBook=(evt)=>{
        if(evt.key==="Enter"){
            console.log("hello");
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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}
export default Main;
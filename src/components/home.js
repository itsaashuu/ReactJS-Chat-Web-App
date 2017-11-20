import React, { Component } from 'react'
import  { render } from "react-dom";
import Chatroom from './Chatroom'
import Navbar from "./navbar";

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Navbar/>
                <Chatroom/>
            </div>
        );
    }
}

render(<Home/>,document.getElementById("home"))
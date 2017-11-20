import React from "react";
import  { render } from "react-dom";
import Navbar from './components/navbar'
import LogIN from './components/LogIn'
import SignIN from './components/SignIn'

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className="row">
                    <div className="col s1"></div>
                    <div className="col s3"><LogIN/></div>
                    <div className="col s2"></div>
                    <div className="col s6"><SignIN/></div>
                </div>
            </div>
        );
    }
};

render(<App/>,document.getElementById('app'));
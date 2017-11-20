import React from "react";

class Navbar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="navbar">
                <nav>
                    <div className="nav-wrapper blue row">
                        <a href="#" className="brand-logo col s1 offset-s0" styles={{'margin-left' : '25px'}}>ChatBox</a>
                    </div>
                </nav>
            </div>
        );
    }
};

export default Navbar
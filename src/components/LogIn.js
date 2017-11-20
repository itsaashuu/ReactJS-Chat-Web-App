import React from "react";

class LogIN extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    logIn(){
        const emailID = this.state.email;
        const pass = this.state.password;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(emailID, pass);
        promise.catch(e => console.log(e.message));
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser){
                console.log(firebaseUser);
                window.open("home.html",'_self',false);
            }else{

            }});
    }

    render(){
        return(
            <div className = "row">
                <div className = "col s12">
                    <h5 className="flow-text blue-text text-darken-1">Login</h5>
                    <div className = "row">
                        <div className="input-field col s12">
                            <input id="email_log" type="email" className="validate" name="email" onChange={this.handleInputChange}/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password_log" type="password" className="validate" name="password" onChange={this.handleInputChange}/>
                                <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <a className=" modal-action modal-close waves-effect waves-green blue btn-flat" onClick={this.logIn.bind(this)}>LogIn</a>
                    </div>
                </div>
            </div>
        );
    }
};

export default LogIN
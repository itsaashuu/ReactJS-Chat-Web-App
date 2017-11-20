import React from "react";

class SignIN extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstname:'',
            lastname:'',
            username:'',
            password:'',
            email:''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });
    }


    signIn(){
        const emailID = this.state.email;
        const pass = this.state.password;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(emailID, pass);
        promise.catch(e => console.log(e.message));
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser){
                window.open("home.html",'_self',false);
            }else{
                console.log('not logged in');
            }});
    }

    render(){
        return(
            <div className = "row">
                <h5 className = "flow-text blue-text text-darken-1">Sign Up</h5>
                <div className="row">
                    <div className="input-field col s5">
                        <input id="first_name" type="text" className="validate" name="firstname"  onChange={this.handleInputChange}/>
                            <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s5">
                        <input id="last_name" type="text" className="validate"  onChange={this.handleInputChange} name="lastname"/>
                            <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10">
                        <input id="username" type="text" className="validate" name="username" onChange={this.handleInputChange}/>
                            <label htmlFor="username">Username</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10">
                        <input id="password" type="password" className="validate" name="password"  onChange={this.handleInputChange}/>
                            <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10">
                        <input id="email" type="email" className="validate" name="email"  onChange={this.handleInputChange}/>
                            <label htmlFor="email">Email</label>
                    </div>
                </div>
                <a className=" modal-action modal-close waves-effect blue waves-green btn-flat" onClick={this.signIn}>Sign Up</a>
            </div>
        );
    }
};

export default SignIN
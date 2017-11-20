import React, { Component } from 'react'
import Navbar from './navbar'

class Chatroom extends React.Component{

    constructor(props, context){
        super(props,context)
        this.updateMessage = this.updateMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.logOut = this.logOut.bind(this)
        this.state={
            message:'',
            messages:[

            ]
        }
    }

    componentDidMount(){
        firebase.database().ref('messages/').on('value', (snapshot) => {
            const currentMessages = snapshot.val()
            if(currentMessages!=null){
                this.setState({
                    messages: currentMessages
                })
            }
        })
    }

    updateMessage(event){
        this.setState({
            message:event.target.value
        })
    }

    submitMessage(event){
        console.log(this.state.message)
        const nextMessage = {
            id: this.state.messages.length,
            text:this.state.message
        }
        firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
    }

    logOut(){
        firebase.auth().signOut();
    }

    render(){
        const currentMessage = this.state.messages.map((message,i) => {
            return(
                <li key={message.id}>{message.text}</li>
            )
        })
        return(
            <div>
                <ol>
                    {currentMessage}
                </ol>
                <input onChange={this.updateMessage} type="text" placeholder="Message"/>
                <br/>
                <button className=" modal-action modal-close waves-effect waves-green blue btn-flat" onClick={this.submitMessage}> Submit Message </button>
                <button className=" modal-action modal-close waves-effect waves-green blue btn-flat" onClick={this.logOut}> Log Out </button>
            </div>
        );
    }
}

export default Chatroom
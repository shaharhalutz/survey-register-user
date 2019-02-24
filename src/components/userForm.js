import React, { Component } from 'react';
import uuid from "uuid";
class UserForm extends Component {

  constructor(){
    super();
    this.state = {
      token : '',
    }
  }

uuid(){
    // TBD: consider using uuid npm package instead
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;

  }

  handleDonePressed(){

      this.props.onCompletion(this.state.token)
  }

  updateToken(token){
    this.setState({token})
  }


  render() {
    return (
      <div>
          <form id = "tokenForm" action="https://2u67r6yx54.execute-api.eu-west-1.amazonaws.com/default/survey-register-user" method="POST">
            <input onChange={(event) => this.updateToken(event.target.value)} type="text" placeholder='Your PushedID' id="token" value={this.state.token} name="token"/>   
            <input type="hidden" id="uuid" value={uuid.v4()} name="uuid"/>
            <input type="submit" value="Submit" />

          </form>

    
      </div>
    )
  }
}

export default UserForm;

//           <h1 className="start-button" onClick={() =>  {this.handleDonePressed()} }>Done</h1>

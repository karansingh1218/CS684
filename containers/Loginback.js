import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Modal } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);


    this.state = {
      show: false,
      
      email: "",
      password: "",
      
      users: [],
      user: {
        username: 'Sam',
        email: '20.mail',
        password: '123'
      }
    };
  }
  
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  componentDidMount() {
    this.getUserProfile();
  }

  getUserProfile = _ => {
    fetch('http://localhost:4000/products')
    .then(response => response.json())
    .then(response => this.setState({ users: response.data }))
    .catch(err => console.error(err))
  };

  addUserProfile = _ => {
    this.setState({ show: true });
    const {user} = this.state;
    fetch(`http://127.0.0.1:4000/products/add?username=${user.username}&email=${user.email}&password=${user.password}`)
      .then(this.getUserProfile)
      .catch(err => console.error(err))
  };
  renderUserProfile = ({username,email, password}) => <div>{username} {email} {password}</div>
  // renderUserProfile = ({username,email, password}) => <div>{username} {email} {password}</div>


// FETCH Commands
// User Authentication
  validateForm() {
    return this.state.user.email.length > 0 && this.state.user.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    const {users, user} = this.state
    return (
      <div className="Login">
      {/* {users.map(this.renderUserProfile)} */}
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value = {user.username}
              onChange={e => this.setState({user: { ...user, username: e.target.value}})} 
              // value={this.state.email}
              // onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value = {user.email}
              onChange={e => this.setState({user: { ...user, email: e.target.value}})} 
              // value={this.state.email}
              // onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value = {user.password}
              type="password"
              onChange={e => this.setState({user: { ...user, password: e.target.value}})} 
              // value={this.state.password}
              // onChange={this.handleChange}
            />
          </FormGroup>
          
          <Button variant="primary" type="submit" onClick={this.addUserProfile} disabled={!this.validateForm()}>
          Submit
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>User Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>You have succesfully created an account</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            </Modal.Footer>
        </Modal>

        </form>
      </div>
    );
    
    // eslint-disable-next-line

    // render() {
    //   const {users, user} = this.state
    //   return (
    //     <div className="Login">
    //       <form onSubmit={this.handleSubmit}>
    //         <FormGroup controlId="email" bsSize="large">
    //           <ControlLabel>Email</ControlLabel>
    //           <FormControl
    //             autoFocus
    //             type="email"
    //             value={this.state.email}
    //             onChange={this.handleChange}
    //           />
    //         </FormGroup>
    //         <FormGroup controlId="password" bsSize="large">
    //           <ControlLabel>Password</ControlLabel>
    //           <FormControl
    //             value={this.state.password}
    //             onChange={this.handleChange}
    //             type="password"
    //           />
    //         </FormGroup>
    //         <Button
    //           block
    //           bsSize="large"
    //           disabled={!this.validateForm()}
    //           type="submit"
    //         >
    //           Login
    //         </Button>
    //       </form>
    //     </div>
    //   );

         

          {/* <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button> */}
  }
}
import React, { Component, Link } from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default class PersonList extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
        //with this, can do const userurl='/users"
        
        const instance = axios.create({
            baseURL:"https://domainname.com/api",
            timeout: 1000,
            headers:{}
        })

    }
    //can create/resuse axios object with instance


    //make it async so you can try catch
    getUsers=async()=>{
        const userurl="https://randomuser.me/api/?results=10"
       try{ const response= await axios.get(userurl)
        this.setState({users: response.data.results})
        console.log(this.state.users[0])

        return response.data
       }
       catch(error){
        console.log(error)
       }
        //get async and call in the render
    }
    //after render
    componentDidMount(){
        this.getUsers();

    }
    

    render() {
    return (
      <div>
        <h3 >UserList</h3>
         {
            this.state.users.map((user)=>
              <Container key={user.id} className='User'>
                <Row>
             <h3 > {user.name.first} {user.name.last} {user.login.uuid}</h3>
             </Row>
              <Row>
                <Col>

                <Image src={user.picture.large} roundedCircle />
                <br/>
                <Button>Details</Button>
                </Col>
                <Col className='Labels' text-end>

              <p>User Name:</p>
              <p>Gender: </p>
              <p>Time Zone Description: </p>
              <p>Address: </p>
              <p>Email: </p>
              <p>Birth Date and Age: </p>
              <p>Register Date: </p>
              <p>Phone: </p>
              <p>Cell#: </p>
              </Col>
              <Col>
              
              <p>{user.login.username}</p>
              <p>{user.gender}</p>
              <p>{user.location.timezone.description}</p>
              <p>{user.location.number}, {user.location.name}, {user.location.city}, {user.location.state}, {user.location.country}, {user.location.postcode}</p>
              <p>{user.email}</p>
              <p>{user.dob.date} {user.dob.age}</p>
              <p>{user.registered.date}</p>
              <p>{user.phone}</p>
              <p>{user.cell}</p>
              </Col>

              </Row>

             </Container>
          )
            
        } 
        
        </div>
    )
  }
}

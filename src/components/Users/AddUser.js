import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Card from "../UI/Card";
import "./AddUser.css";

const AddUser = (props) => {


    const [enteredUserName, setEnteredUserName] = useState('');

    const [enteredAge, setEnteredAge] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () =>{
        setShow(true);
    } 

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUserName.trim().length == 0 || enteredAge.trim().length == 0) {
            alert("invalid input");
           
        }
        else{
            setShow(true);
            props.onAddUser(enteredUserName, enteredAge);
            setEnteredUserName("");
            setEnteredAge("");
        }
        if (enteredAge < 1) {
            alert("age is wrong")
           
        }
        else{
            handleShow()
        }
        
      
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);

    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);

    }

    return (
        <Card>
            <Form onSubmit={addUserHandler}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" value={enteredUserName} onChange={userNameChangeHandler} placeholder="Enter User Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="age">
                    <Form.Label>Age (Years)</Form.Label>
                    <Form.Control type="number" value={enteredAge} onChange={ageChangeHandler} placeholder="Enter your age" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add User
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>you added user sucessfully!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </Card>

    );

}

export default AddUser;
import React from "react";
import {Button, Form} from "react-bootstrap";


function RoomForm () {
    return (
        <div>
            <h3 className="text-center">Join meeting</h3>
            <Form className="col-md-4 col-sm-8 mx-auto">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="text-muted">Meeting ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter meeting ID" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>By clicking "Join", you agree to our <a href="#">Terms of Services</a> and <a href="">Privacy Statement</a></Form.Label>
                </Form.Group>
                <Button className="w-100 rounded-3" type="submit">Join</Button>
            </Form>
        </div>
    )
}

export default RoomForm;
import React from "react";
import {Button, Form} from "react-bootstrap";


function RequestMeetingForm() {
  return (
    <div>
      <h3 className="text-center">Request a Room ID</h3>
      <Form className="col-md-4 col-sm-8 mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted">Room Name</Form.Label>
          <Form.Control type="text" placeholder="Enter a name for the room" />
        </Form.Group>
        <Button className="w-100 rounded-3" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default RequestMeetingForm;
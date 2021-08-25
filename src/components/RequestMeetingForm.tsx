import React, {useState} from "react";
import {Alert, Button, Form} from "react-bootstrap";
import axios, {AxiosResponse} from "axios";
import {RoomResponse} from "../interfaces/room";

function RequestMeetingForm() {
  const [loading, setLoading] = useState(false);

  const [roomName, setRoomName] = useState("");

  const [meetingId, setMeetingId] = useState("");

  const [errMessage, setErrMessage] = useState("");

  const requestMeetingId = (data: {name: string}) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/room/`, data)
      .then((res: AxiosResponse<RoomResponse>) => {
        setErrMessage("");
        setMeetingId(res.data.id);
      })
      .catch((err) => setErrMessage(JSON.stringify(err.response.data)));
  };

  const handleRequestMeetingId = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      name: roomName,
    };
    requestMeetingId(data);
    setLoading(false);
  };

  return (
    <div>
      <h3 className="text-center">Request a Room ID</h3>
      <Form
        className="col-md-4 col-sm-8 mx-auto"
        onSubmit={handleRequestMeetingId}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted">Room Name</Form.Label>
          <Form.Control
            onChange={(e) => {
              setRoomName(e.target.value);
            }}
            type="text"
            placeholder="Enter a name for the room"
            required
          />
        </Form.Group>
        {errMessage && <div className="text-danger">{errMessage}</div>}
        <Button disabled={loading} className="w-100 rounded-3" type="submit">
          {loading ? "Requesting ..." : "Submit"}
        </Button>
      </Form>

      <div className="col-md-5 col-sm-10 mx-auto mt-4 ">
        <Alert className="text-center" variant={"success"}>
          {meetingId
            ? `Your meeting ID : ${meetingId}`
            : "The meeting ID will appear here."}
        </Alert>
      </div>
    </div>
  );
}

export default RequestMeetingForm;

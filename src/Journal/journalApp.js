import React from "react";
import "../index.css";
import { Button, Card, Form, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Entry({ entry, index, markEntry, removeEntry }) {
  return (
    <div
      className="entry"
      
    >
      <span style={{ textDecoration: entry.isDone ? "line-through" : "" }}>{entry.text}</span>
      <div>
        {/* <Button variant="outline-success" onClick={() => markEntry(index)}>✓</Button>{' '} */}
        <Button variant="outline-danger" onClick={() => removeEntry(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormEntry({ addEntry }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addEntry(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

      <Form.Control as="textarea" rows={3} value={value} onChange={e => setValue(e.target.value)} placeholder="Add a new note" />
    </Form.Group>
    <Button variant="info mb-3" type="submit">
      Submit
    </Button>
  </Form>
  );
}

function App() {

  const [entrys, setEntrys] = React.useState([
    {
      text: "Welcome to Notes!",

    }
  ]);


  const addEntry = text => {
    const newEntrys = [...entrys, { text }];
    setEntrys(newEntrys);
  };

  const removeEntry = index => {
    const newEntrys = [...entrys];
    newEntrys.splice(index, 1);
    setEntrys(newEntrys);
  };

  return (
    <div>
    <Container fluid="lg">

          <Col>
            <br></br>
            <Row>
              <Col xs={8}>
                    <Card>
                      <Card.Body>

                        {entrys.map((entry, index) => (
                          <Card>
                            <Card.Body>
                              <Entry
                              key={index}
                              index={index}
                              entry={entry}

                              removeEntry={removeEntry}
                              />
                            </Card.Body>
                          </Card>
                        ))}
                      </Card.Body>
                    </Card>
              </Col>
              <Col xs={4}>
                <Card id='createCard'>
                  <FormEntry addEntry={addEntry} />
                </Card>
              </Col>
            </Row>
            </Col>
          </Container>
          </div>

  );
}

export default App;

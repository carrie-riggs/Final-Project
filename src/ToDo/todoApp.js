import React from "react";
import "../index.css";
import { Button, Card, Form, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      {/* <Form.Label><b>Add Todo</b></Form.Label> */}
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </Form.Group>
    <Button variant="info mb-3" type="submit">
      Submit
    </Button>
  </Form>
  );
}

function App() {
  // This is the todo list which ontains all the todos and wether they are done or not
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ]);

  // this adds the todos, appends new todos with the spread operator
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  //copies all the todos in newTodos and marks them as done bu using the index, then sets the newTodos as todos.
  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  //use the index to splice the list and remove the selected todo, then sets the new todos
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
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
                        {/* THIS IS WHERE THE LIST RENDERS */}
                        {todos.map((todo, index) => (
                          <Card>
                            <Card.Body>
                              <Todo
                              key={index}
                              index={index}
                              todo={todo}
                              markTodo={markTodo}
                              removeTodo={removeTodo}
                              />
                            </Card.Body>
                          </Card>
                        ))}
                      </Card.Body>
                    </Card>
              </Col>
              <Col xs={4}>
                <Card id='createCard'>
                  <FormTodo addTodo={addTodo} />
                </Card>
              </Col>
            </Row>
            </Col>
          </Container>
          </div>

  );
}
export default App;

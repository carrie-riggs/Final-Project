import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import '../index.css';



function CreateHub () {
        return(
            <div>
                <div className='createCard' >
                    <Card>
                        <Card.Body>
                            <form>
                                <input type="text" placeholder="Add Item to ToDo List" id="todoInput">
                                    
                                </input>
                            </form>
                            <div className="text-center">
                                <Button type="submit" className="info">Add</Button>
                            </div>
                            
                        </Card.Body>
                    </Card>
                </div>

            </div>
        );
}

export default CreateHub;


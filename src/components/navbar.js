import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function BasicExample() {
  return (
    <div className='text-center'>
        <ButtonGroup size="lg" aria-label="Basic example">
        <Button variant="info">ToDo</Button>
        <Button variant="info">Journal</Button>
        <Button variant="info">About</Button>
        </ButtonGroup>
        
    </div>
  );
}

export default BasicExample;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function About() {
    return (
      <Card style={{ width: '18rem' }} className="container d-flex justify-content-center align-items-center mt-3">
        <Card.Body>
          <Card.Title>Ulises Mariano Melgarejo</Card.Title>
          <Card.Text>
            Algunas de mis redes son:
            <br />
            LinkedIn: www.linkedin.com/in/ulises-mariano-melgarejo-9b8b8b17b/
            <br />
            GitHub: www.github.com/Nemo3003
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default About;
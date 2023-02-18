// import React from "react";

// function Login_Reister(props) {
//   return (
//     <form className="form">
//       <input type="text" placeholder="Username" />
//       <input type="password" placeholder="Password" />
//       {!props.isRegistered && (
//         <input type="password" placeholder="Confirm Password" />
//       )}

//       <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
//     </form>
//   );
// }

// export default Login_Reister;


import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HomePage() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={10} md={6}>
          <h1 className="text-center mb-4">Welcome to my React.js Bootstrap Homepage!</h1>
          <p className="lead text-center mb-4">
            This is a basic homepage built using React.js and Bootstrap.
          </p>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Learn more
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;

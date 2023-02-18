import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Users from '../../slots/pages/Users';
import SearchBar from './SearchBar'
// import './CenterPosition.css'
import { Container, Row, Col, Form } from 'react-bootstrap';
import SearchCity from './SearchCity';
import HorizontalExample from './HorizontalExample';

const SearchParking = () => {
  const [parkInDate, setParkInDate] = useState(new Date());
  const [parkOutDate, setParkOutDate] = useState(new Date());

  function onParkInChange(inDate) {
    const selectedDate = new Date(inDate).toLocaleDateString();
    const selectedTime = new Date(inDate).toLocaleTimeString();
    setParkInDate(inDate)
    console.log(selectedDate + " " + selectedTime);
  }

  function onParkOutChange(outDate) {
    const selectedDate = new Date(outDate).toLocaleDateString();
    const selectedTime = new Date(outDate).toLocaleTimeString();
    setParkOutDate(outDate)
    console.log(selectedDate + " " + selectedTime);
  }

  return <div>
    <Container>
    <Row className="justify-content-center align-items-center">
        <Col md={6}><h2>Search</h2></Col>
      </Row>
      <Row>
        <Col><SearchCity /></Col>
      </Row>
      <Row>
        <Col class="md-2"><h5>Test</h5> </Col>
        <Col class="md-2"><h5>Test2</h5></Col>
      </Row>
    </Container>
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
        Park In Date
        </Form.Label>
        <Col sm={10}>
        <DateTimePicker onChange={onParkInChange} value={parkInDate} format="MM-dd-y h:mm" minDate={new Date()} amPmAriaLabel="Select AM/PM" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Park Out Date
        </Form.Label>
        <Col sm={10}>
        <DateTimePicker onChange={onParkOutChange} value={parkOutDate} format="MM-dd-y h:mm" minDate={parkInDate} />
        </Col>
      </Form.Group>
    </Form>
    <Users />
  </div>
};

export default SearchParking;

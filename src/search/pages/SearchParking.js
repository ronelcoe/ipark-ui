import React, { useState } from 'react';
import { Container, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

function SearchParking() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ];

  const handleDatesChange = ({ startDate, endDate }) => {
    setCheckInDate(startDate);
    setCheckOutDate(endDate);
  };

  const handleFocusChange = (focusedInput) => {
    setFocusedInput(focusedInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Check-in: ${checkInDate}, Check-out: ${checkOutDate}`);
  };

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  return (
    <Container className="text-center mb-4">
      {/* <DropdownButton id="dropdown-basic-button" title={selectedOption || 'Select an option'} onSelect={handleSelect}>
      {options.map((option) => (
        <Dropdown.Item key={option.value} eventKey={option.value}>
          {option.label}
        </Dropdown.Item>
      ))}
    </DropdownButton> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="bookingDates">
          <Form.Label>Park-in - Park-out Dates</Form.Label>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <DateRangePicker
            startDate={checkInDate}
            startDateId="checkInDate"
            endDate={checkOutDate}
            endDateId="checkOutDate"
            onDatesChange={handleDatesChange}
            focusedInput={focusedInput}
            onFocusChange={handleFocusChange}
            minimumNights={0}
            small
            block
          />
          </div>
        </Form.Group>
        <Button type="submit" disabled={!checkInDate || !checkOutDate}>
          Search
        </Button>
      </Form>
    </Container>
  );
}

export default SearchParking;

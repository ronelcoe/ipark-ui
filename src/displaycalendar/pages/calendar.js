// npm install react react-dom react-bootstrap bootstrap moment react-big-calendar
import React from 'react';
import { Container } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function BookingPage() {
  const events = [
    {
      title: 'Meeting with John',
      start: new Date(2023, 1, 9, 10, 0),
      end: new Date(2023, 1, 17, 11, 0),
    },
    {
      title: 'Lunch with Sarah',
      start: new Date(2023, 1, 17, 12, 0),
      end: new Date(2023, 1, 18, 13, 0),
    },
  ];

  return (
    <Container>
      <h1 className="text-center mb-4">Book a Meeting</h1>
      <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
    </Container>
  );
}

export default BookingPage;

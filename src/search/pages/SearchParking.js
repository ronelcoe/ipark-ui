import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Users from '../../slots/pages/Users';
import SearchBar from './SearchBar'
import './CenterPosition.css'

const SearchParking = () => {
  const [parkInDate, setParkInDate] = useState(new Date());
  const [parkOutDate, setParkOutDate] = useState(new Date());

  function onParkInChange(inDate) {
    const selectedDate = new Date(inDate).toLocaleDateString();
    const selectedTime = new Date(inDate).toLocaleTimeString();
    setParkInDate(inDate)
    console.log(selectedDate + " " +  selectedTime);
  }

  function onParkOutChange(outDate) {
    const selectedDate = new Date(outDate).toLocaleDateString();
    const selectedTime = new Date(outDate).toLocaleTimeString();
    setParkOutDate(outDate)
    console.log(selectedDate + " " +  selectedTime);
  }

  return <div>
    <h2 className='center-position'>Search Parking Slot</h2>
    <h5>Park In Date</h5>
    <h5>Park Out Date</h5>
    <SearchBar/>
    <div className='center-position-padding-lr'>
    <DateTimePicker onChange={onParkInChange} value={parkInDate} format="MM-dd-y h:mm" minDate={new Date()} amPmAriaLabel="Select AM/PM"/>
    <DateTimePicker onChange={onParkOutChange} value={parkOutDate} format="MM-dd-y h:mm"/>
    </div>
    <Users/>
    </div>
};

export default SearchParking;

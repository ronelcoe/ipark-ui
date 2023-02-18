import React, { useState } from 'react';
import { Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';

function SearchCondo() {
const [selectedValue, setSelectedValue] = useState('');
const [searchInput, setSearchInput] = useState('');
const [dropdownList, setDropdownList] = useState([
  { id: 1, name: 'AIR Residences' },
  { id: 2, name: 'The Rise' },
  { id: 3, name: 'Red Residences' },
  { id: 4, name: 'Lush Residences' },
  { id: 5, name: 'GT Tower' },
]);

const handleSearchInputChange = (event) => {
  setSearchInput(event.target.value);
};

const handleDropdownItemClick = (event) => {
  setSelectedValue(event.target.id);
  setSearchInput('');
};

const filteredDropdownList = dropdownList.filter((item) => {
  return item.name.toLowerCase().includes(searchInput.toLowerCase());
});

return (
  <DropdownButton id="dropdown-basic-button" title="Select an Item">
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
    <Dropdown.Divider />
    {filteredDropdownList.map((item) => (
      <Dropdown.Item key={item.id} id={item.name} onClick={handleDropdownItemClick}>
        {item.name}
      </Dropdown.Item>
    ))}
  </DropdownButton>
);
}

export default SearchCondo;

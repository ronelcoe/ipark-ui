import React from 'react';
import SearchCondo from './SearchCondo';
import SearchParking from './SearchParking';
import SearchCity from './SearchCity';
import { Container, Row, Col } from 'react-bootstrap';

function Search() {
    return (
        <Container className="text-center mb-4">
            <h4>Search Parking Slot</h4>
            <Col>
                <Row>
                    <SearchCity />
                </Row>
                <Row>
                    <SearchCondo />
                </Row>
            </Col>
            <Col>
                <Row>
                    <SearchParking />
                </Row>
            </Col>
        </Container>
    );
}

export default Search;
import React from "react";
import {Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = () => {
    return (
        <>
            <Container fluid="sm">
                <Row>
                    <Col>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Layout;

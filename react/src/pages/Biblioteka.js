import React, { useEffect, useState } from "react"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

import ListGroup from 'react-bootstrap/ListGroup';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';



const FileComponent = ({ data }) => {
    return (
        <div>
            {data.name}
        </div>
    );
};



const DirComponent = ({ data }) => {
    return (
        <div>
            <div>
                <div>
                    <span className="">🗂 {data.name}</span>
                    <Button className="" size="sm" variant="link">
                        ⏫</Button>{' '}
                    <Button className="" size="sm" variant="link">
                        ↕️</Button>{' '}


                </div>
            </div>
            <div>
                <ul class="ml-5 mb-3">
                    {data.children.map((child) => {
                        return (
                            <li>
                                <BiblComponent data={child} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};



const NoComponent = ({ data }) => {
    return (
        <span>🎆 No Component here</span>
    );
};



const BiblComponent = ({ data }) => {
    if (data.entry_type === "file"){
        return (
            <FileComponent data={data}></FileComponent>
        );

    } else if(data.entry_type === "dir"){
        return (
            <DirComponent data={data}></DirComponent>
        );
    } else{
        return (
            <NoComponent></NoComponent>
        );
    }
};



const AllBiblComponent = ({ data }) => {
    return (
        <Container fluid="sm">
            <Row>
                <Col>
                    <h2 class="m-5">Biblioteka Name: {data.name}</h2>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <BiblComponent data={data}></BiblComponent>
                </Col>
            </Row>
        </Container>
    );
};






const UsingFetchBibl = () => {
    const [tree, setBiblTree] = useState({
        "children": [],
        "name": ""
    })

    const fetchData = () => {
        fetch("tree.json")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setBiblTree(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <AllBiblComponent data={tree}></AllBiblComponent>
    )
}

export default UsingFetchBibl

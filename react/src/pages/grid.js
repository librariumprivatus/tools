import React, {useEffect, useState} from 'react';
import UsingFetch from './fetcJson'
import Biblioteka from "./Biblioteka";
import FetcJson from "./fetcJson";
import logo from "../logo.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';




function GridExample() {
    return (
        <Row xs={1} md={2} className="g-4">

        </Row>
    );
}

function GroupExample() {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to
                        additional content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This card has even longer content than the
                        first to show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}

const CardBook = (props) =>  {
    return (
        <Col>
        <Card className="m-1">
            <Card.Img variant="top" src={"/" + props.store + "/" + props.book.cover} />
            <Card.Body>
                <Card.Title>{props.book.title}</Card.Title>

            </Card.Body>
        </Card>
        </Col>
    );
}


// <CardBook data={book}></CardBook>

const Books = (props) => {
    return (
        <>
            <h4>Books 2: </h4>
            <h4>Books Len: {props.books?.length}</h4>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="" >

            {props.books?.map(book => <CardBook book={book} store={props.store}></CardBook>)};
            </Row>
        </>
    );
};


const Collection = (props) => {
    return (
        <div>
            <h1>Collection</h1>
            <Books books={props.collection.books} store={props.collection.store}></Books>
        </div>
    );
};





const GridInner = () => {
    const [collection, setCollection] = useState({
        "collection": {},
    })

    const fetchData = () => {
        fetch("main.json")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCollection(data)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h5>Len: {collection?.books?.length}</h5>
            <Collection collection={collection}></Collection>
        </>
    )
}

const Grid = () => {
    return (
        <div>
            <h1>Grid All</h1>
            <GridInner></GridInner>

        </div>
    );
};

export default Grid;

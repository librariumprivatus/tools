import React, {useEffect, useState} from 'react';

import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
//  import CardGroup from 'react-bootstrap/CardGroup';
import books from './main-data'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import CardBook from './Book'

/*function GridExample() {
    return (
        <Row xs={1} md={2} className="g-4">

        </Row>
    );
}*/

/*function GroupExample() {
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
}*/




const Books = ({ data }) => {

    return (
            <Row xs={1} md={4} className="" >{
                books.map(book => <CardBook
                    key={book.cover}
                    data={book}>
                    </CardBook>
                )};
        </Row>
    );
};


const Collection = ({ data }) => {
    return (
        <div>
            <h1>Collection</h1>
            <Books data={data.books}></Books>
        </div>
    );
};




const ImagesList = () => {
    const [collection, setColection] = useState({
        "collection": {},
    })

    const fetchData = () => {
        fetch("main.json")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setColection(data)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Collection data={collection}></Collection>
    )
}

export default ImagesList;

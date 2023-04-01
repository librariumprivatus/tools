import Card from "react-bootstrap/Card";
import {LazyLoadImage} from "react-lazy-load-image-component";
import React from "react";
import ImagesList from "./ImageList";


const CardBook = ({ data }) =>  {
    return (
        <Card className="m-1">
            <LazyLoadImage src={"/covers/" + data.cover} wrapperClassName={}/>
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
            </Card.Body>
        </Card>
    );
}


export default CardBook;

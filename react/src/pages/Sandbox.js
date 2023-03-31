import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// import { configureStore } from '@reduxjs/toolkit'



class Square extends React.Component {
    render() {
        return (
            <>
                <button className="square">
                    Button
                </button>
                <div className="shopping-list">
                    <h1>Список покупок для {this.props.name}</h1>
                    <ul>
                        <li>Instagram</li>
                        <li>WhatsApp</li>
                        <li>Oculus</li>
                    </ul>
                </div>
            </>
        );
    }
}

const SandboxContent = () => {
    return (
        <>
        <h1>Grid All</h1>
    <p>
        Классический текст Lorem Ipsum, используемый с XVI века

        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        Абзац 1.10.32 "de Finibus Bonorum et Malorum", написанный Цицероном в 45 году н.э.

        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    </p>
        </>
    );
};

const Sandbox = () => {
    return (
            <Container fluid="sm">
                <Row>
                    <Col>
                        <SandboxContent></SandboxContent>
                        <Square></Square>
                    </Col>
                </Row>
            </Container>
    );
};

export default Sandbox

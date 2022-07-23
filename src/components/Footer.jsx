import { Col, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { DataContext } from './Contexto';

function Footer(/*props*/) {
    const { bHasData } = useContext(DataContext);

    return (
        <footer className={ bHasData ? "footer" : "fixed-bottom footer" }>
            <Row>
                All rights reserved to Ulises M Melgarejo // 2022 // NEWS APP
            </Row>
        </footer>
    );
}
export default Footer;
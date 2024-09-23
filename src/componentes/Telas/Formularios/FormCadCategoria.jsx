import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function FormCadCategoria(props) {
    const [categoria, setCategoria] = useState({
        codigo: "",
        descricao: ""
    });

    const [validated, setFormValidated] = useState(false);

    function handleSubmit(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (props.modoAlterar) {
                // Alterar categoria
                props.setListaCategorias(props.listaCategorias.map((item) => {
                    return item.codigo !== props.categoriaSelecionada.codigo ? item : props.categoriaSelecionada;
                }));
                props.setModoAlterar(false);
            } else {
                // Cadastrar categoria
                props.setListaCategorias([...props.listaCategorias, categoria]);
            }
            props.setExibirTabela(true);
        } else {
            setFormValidated(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        if (props.modoAlterar) {
            props.setCategoriaSelecionada({ ...props.categoriaSelecionada, [elemento]: valor });
        } else {
            setCategoria({ ...categoria, [elemento]: valor });
        }
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label>Código</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="codigo"
                        name="codigo"
                        value={props.modoAlterar ? props.categoriaSelecionada.codigo : categoria.codigo}
                        onChange={manipularMudanca}
                        disabled={props.modoAlterar} // Código não pode ser alterado
                    />
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="descricao"
                        name="descricao"
                        value={props.modoAlterar ? props.categoriaSelecionada.descricao : categoria.descricao}
                        onChange={manipularMudanca}
                    />
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>
                <Col md={1}>
                    {props.modoAlterar ? (
                        <Button type="submit">Alterar</Button>
                    ) : (
                        <Button type="submit">Cadastrar</Button>
                    )}
                </Col>
                <Col md={{ offset: 1 }}>
                    <Button onClick={() => { props.setExibirTabela(true); }}>Voltar</Button>
                </Col>
            </Row>
        </Form>
    );
}

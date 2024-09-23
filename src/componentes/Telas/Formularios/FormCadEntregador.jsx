import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default function FormCadEntregador(props) {
    const [entregador, setEntregador] = useState({
        codigo: 0,
        nome: "",
        cnpj: "",
        veiculo: "",
        placa: ""
    });

    const [validated, setFormValidated] = useState(false);

    function handleSubmit(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (props.modoAlterar) {
                props.setListaDeEntregadores(props.listaEntregadores.map((item) => {
                    return item.codigo !== props.entregadorSelecionado.codigo ? item : props.entregadorSelecionado;
                }));
                props.setModoAlterar(false);
            } else {
                // cadastrar entregador
                props.setListaDeEntregadores([...props.listaEntregadores, entregador]);
            }
            // exibir a tabela com o entregador incluído/alterado
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
            props.setEntregadorSelecionado({ ...props.entregadorSelecionado, [elemento]: valor });
        } else {
            setEntregador({ ...entregador, [elemento]: valor });
        }
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="3">
                    <Form.Label>Código</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="codigo"
                        name="codigo"
                        disabled={props.modoAlterar}
                        value={props.modoAlterar ? props.entregadorSelecionado.codigo : entregador.codigo}
                        onChange={manipularMudanca}
                    />
                </Form.Group>
                <Form.Group as={Col} md="9">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="nome"
                        name="nome"
                        value={props.modoAlterar ? props.entregadorSelecionado.nome : entregador.nome}
                        onChange={manipularMudanca}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="cnpj"
                        name="cnpj"
                        value={props.modoAlterar ? props.entregadorSelecionado.cnpj : entregador.cnpj}
                        onChange={manipularMudanca}
                    />
                </Form.Group>
                <Form.Group as={Col} md="3">
                    <Form.Label>Veículo</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="veiculo"
                        name="veiculo"
                        value={props.modoAlterar ? props.entregadorSelecionado.veiculo : entregador.veiculo}
                        onChange={manipularMudanca}
                    />
                </Form.Group>
                <Form.Group as={Col} md="3">
                    <Form.Label>Placa</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="placa"
                        name="placa"
                        value={props.modoAlterar ? props.entregadorSelecionado.placa : entregador.placa}
                        onChange={manipularMudanca}
                    />
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>
                <Col md={1}>
                    {props.modoAlterar ? <Button type="submit">Alterar</Button> : <Button type="submit">Cadastrar</Button>}
                </Col>
                <Col md={{ offset: 1 }}>
                    <Button onClick={() => { props.setExibirTabela(true); }}>Voltar</Button>
                </Col>
            </Row>
        </Form>
    );
}

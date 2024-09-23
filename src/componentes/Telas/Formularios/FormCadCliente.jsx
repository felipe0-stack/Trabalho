import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function FormCadCliente(props) {
    const [cliente, setCliente] = useState({
        nome: "",
        cpf: "",
        endereco: "",
        cep: "",
        telefone: "",
        email: ""
    });

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity()) {
            if (props.modoAlterar) {
                // Alterar cliente
                props.setListaDeClientes(
                    props.listaClientes.map(item => 
                        item.cpf !== props.clienteSelecionado.cpf ? item : cliente
                    )
                );
                props.setModoAlterar(false);
            } else {
                // Cadastrar cliente
                props.setListaDeClientes([...props.listaClientes, cliente]);
            }
            props.setExibirTabela(true);
        } else {
            setValidated(true);
        }
        event.preventDefault();
        event.stopPropagation();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCliente({ ...cliente, [name]: value });
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="nome"
                        value={props.modoAlterar ? props.clienteSelecionado.nome : cliente.nome}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="cpf"
                        value={props.modoAlterar ? props.clienteSelecionado.cpf : cliente.cpf}
                        onChange={handleChange}
                        disabled={props.modoAlterar}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="endereco"
                        value={props.modoAlterar ? props.clienteSelecionado.endereco : cliente.endereco}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="cep"
                        value={props.modoAlterar ? props.clienteSelecionado.cep : cliente.cep}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="telefone"
                        value={props.modoAlterar ? props.clienteSelecionado.telefone : cliente.telefone}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        name="email"
                        value={props.modoAlterar ? props.clienteSelecionado.email : cliente.email}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>
            <Button type="submit">{props.modoAlterar ? 'Alterar' : 'Cadastrar'}</Button>
            <Button onClick={() => { props.setExibirTabela(true); }}>Voltar</Button>
        </Form>
    );
}
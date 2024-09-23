import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
export default function FormCadUsuario(props) {
    const [usuario, setUsuario] = useState({
        codigo: 0,
        nome: "",
        email: "",
        senha: ""
    });

    const [validated, setFormValidated] = useState(false);

    function handleSubmit(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (props.modoAlterar) {
                props.setListaDeUsuarios(props.listaUsuarios.map((item) => {
                    return item.codigo !== props.usuarioSelecionado.codigo ? item : props.usuarioSelecionado;
                }));
                props.setModoAlterar(false);
            } else {
                props.setListaDeUsuarios([...props.listaUsuarios, usuario]);
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
            props.setUsuarioSelecionado({ ...props.usuarioSelecionado, [elemento]: valor });
        } else {
            setUsuario({ ...usuario, [elemento]: valor });
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
                        value={props.modoAlterar ? props.usuarioSelecionado.codigo : usuario.codigo}
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
                        value={props.modoAlterar ? props.usuarioSelecionado.nome : usuario.nome}
                        onChange={manipularMudanca}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={props.modoAlterar ? props.usuarioSelecionado.email : usuario.email}
                        onChange={manipularMudanca}
                    />
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        id="senha"
                        name="senha"
                        value={props.modoAlterar ? props.usuarioSelecionado.senha : usuario.senha}
                        onChange={manipularMudanca}
                    />
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>
                <Col md={1}>
                    <Button type="submit">
                        {props.modoAlterar ? "Alterar" : "Cadastrar"}
                    </Button>
                </Col>
                <Col md={{ offset: 1 }}>
                    <Button onClick={() => { props.setExibirTabela(true); }}>Voltar</Button>
                </Col>
            </Row>
        </Form>
    );
}

import { Button, Container, Table } from "react-bootstrap";

export default function TabelaUsuarios(props) {
    function excluirUsuario(usuario) {
        if (window.confirm("Deseja realmente excluir o usuário " + usuario.nome + "?")) {
            props.setListaDeUsuarios(props.listaUsuarios.filter((item) => {
                return item.codigo !== usuario.codigo;
            }));
        }
    }

    function alterarUsuario(usuario) {
        props.setModoAlterar(true);
        props.setExibirTabela(false);
        props.setUsuarioSelecionado({
            codigo: usuario.codigo,
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha
        });
    }

    return (
        <Container>
            <Button className="mb-3" variant="primary" onClick={() => { props.setExibirTabela(false); }}>
                Adicionar
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaUsuarios?.map((usuario) => {
                            return (
                                <tr key={usuario.codigo}>
                                    <td>{usuario.codigo}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.email}</td>
                                    <td>
                                        <Button onClick={() => alterarUsuario(usuario)} variant="warning">
                                            Alterar
                                        </Button>
                                        {" "}
                                        <Button onClick={() => excluirUsuario(usuario)} variant="danger">
                                            Excluir
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
            <p>Qtd de usuários cadastrados: {props.listaUsuarios.length}</p>
        </Container>
    );
}

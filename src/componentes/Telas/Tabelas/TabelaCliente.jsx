import { Button, Container, Table } from "react-bootstrap";

export default function TabelaClientes(props) {

    function excluirCliente(cliente) {
        if (window.confirm("Deseja realmente excluir o cliente " + cliente.nome + "?")) {
            props.setListaDeClientes(props.listaClientes.filter((item) => {
                return item.cpf !== cliente.cpf; // Exclui o cliente pelo CPF
            }));
        }
    }

    function alterarCliente(cliente) {
        props.setModoAlterar(true);
        props.setExibirTabela(false);
        props.setClienteSelecionado({ ...cliente }); // Define o cliente a ser alterado
    }

    return (
        <>
            <Container>
                <Button className="mb-3" variant="primary" onClick={() => { props.setExibirTabela(false); }}>
                    Adicionar
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Endereço</th>
                            <th>CEP</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.listaClientes?.map((cliente) => {
                            return (
                                <tr key={cliente.cpf}>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.endereco}</td>
                                    <td>{cliente.cep}</td>
                                    <td>{cliente.telefone}</td>
                                    <td>{cliente.email}</td>
                                    <td>
                                        <Button onClick={() => { alterarCliente(cliente) }} variant="warning">
                                            Alterar
                                        </Button>{' '}
                                        <Button onClick={() => { excluirCliente(cliente) }} variant="danger">
                                            Excluir
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <p>Qtd de clientes cadastrados: {props.listaClientes.length}</p>
            </Container>
        </>
    );
}

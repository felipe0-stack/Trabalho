import { Button, Container, Table } from "react-bootstrap";

const TabelaClientes = (props) => {
    const excluirCliente = (cliente) => {
        if (window.confirm("Deseja realmente excluir o cliente " + cliente.nome)) {
            props.setListaDeClientes(props.listaClientes.filter((item) => item.cpf !== cliente.cpf));
        }
    };

    const alterarCliente = (cliente) => {
        props.setModoAlterar(true);
        props.setExibirTabela(false);
        props.setClienteSelecionado(cliente);
    };

    return (
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
                {props.listaClientes.map((cliente) => (
                    <tr key={cliente.cpf}>
                        <td>{cliente.nome}</td>
                        <td>{cliente.cpf}</td>
                        <td>{cliente.endereco}</td>
                        <td>{cliente.cep}</td>
                        <td>{cliente.telefone}</td>
                        <td>{cliente.email}</td>
                        <td>
                            <Button onClick={() => alterarCliente(cliente)} variant="warning">Alterar</Button>
                            <Button onClick={() => excluirCliente(cliente)} variant="danger">Excluir</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TabelaClientes;

import { Button, Container, Table } from "react-bootstrap";

export default function TabelaCategorias(props) {

    function excluirCategoria(categoria) {
        if (window.confirm("Deseja realmente excluir a categoria " + categoria.descricao + "?")) {
            props.setListaCategorias(props.listaCategorias.filter((item) => {
                return item.codigo !== categoria.codigo; // Exclui a categoria pelo código
            }));
        }
    }

    function alterarCategoria(categoria) {
        props.setModoAlterar(true);
        props.setExibirTabela(false);
        props.setCategoriaSelecionada({ ...categoria }); // Define a categoria a ser alterada
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
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.listaCategorias?.map((categoria) => {
                            return (
                                <tr key={categoria.codigo}>
                                    <td>{categoria.codigo}</td>
                                    <td>{categoria.descricao}</td>
                                    <td>
                                        <Button onClick={() => { alterarCategoria(categoria) }} variant="warning">
                                            Alterar
                                        </Button>{' '}
                                        <Button onClick={() => { excluirCategoria(categoria) }} variant="danger">
                                            Excluir
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <p>Qtd de categorias cadastradas: {props.listaCategorias.length}</p>
            </Container>
        </>
    );
}

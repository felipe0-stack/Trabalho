import FormCadCliente from "./Formularios/FormCadCliente";
import Pagina from '../layouts/Pagina';
import { Alert } from "react-bootstrap";
import { useState } from "react";
import TabelaClientes from "./Tabelas/TabelaCliente";

export default function TelaCadastroCliente(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeClientes, setListaDeClientes] = useState([]);
    const [modoAlterar, setModoAlterar] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState({
        nome: "",
        cpf: "",
        endereco: "",
        cep: "",
        telefone: "",
        email: ""
    });

    return (
        <Pagina>
            <Alert className="text-center" variant="success">
                <h2 className="text-center">Tela de Cadastro de Clientes</h2>
            </Alert>
            {
                exibirTabela ? 
                <TabelaClientes 
                    listaClientes={listaDeClientes} 
                    setListaDeClientes={setListaDeClientes} 
                    setExibirTabela={setExibirTabela} 
                    setModoAlterar={setModoAlterar}
                    modoAlterar={modoAlterar} 
                    setClienteSelecionado={setClienteSelecionado} 
                /> :
                <FormCadCliente 
                    listaClientes={listaDeClientes} 
                    setListaDeClientes={setListaDeClientes}
                    setExibirTabela={setExibirTabela} 
                    setModoAlterar={setModoAlterar}
                    modoAlterar={modoAlterar} 
                    setClienteSelecionado={setClienteSelecionado} 
                    clienteSelecionado={clienteSelecionado} 
                />
            }
        </Pagina>
    );
}
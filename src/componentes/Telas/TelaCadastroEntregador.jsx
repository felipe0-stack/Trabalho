import FormCadEntregador from "./Formularios/FormCadEntregador";
import Pagina from '../layouts/Pagina';
import { Alert } from "react-bootstrap";
import TabelaEntregadores from "./Tabelas/TabelaEntregadores";
import { useState } from "react";
// Verifique o caminho correto dos componentes abaixo



export default function TelaCadastroEntregador(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    // Certifique-se de que o nome das variáveis está correto
    const [listaDeEntregadores, setListaDeEntregadores] = useState([]);
    const [modoAlterar, setModoAlterar] = useState(false);
    const [entregadorSelecionado, setEntregadorSelecionado] = useState({
        codigo: 0,
        nome: "",
        cnpj: "",
        veiculo: "",
        placa: ""
    });

    return (
        <Pagina>
            <Alert className="text-center" variant="success">
                <h2 className="text-center">Tela de cadastro de Entregadores</h2>
            </Alert>
            {
                exibirTabela ?
                <TabelaEntregadores listaEntregadores={listaDeEntregadores} 
                                    setListaDeEntregadores={setListaDeEntregadores} 
                                    setExibirTabela={setExibirTabela}
                                    setModoAlterar={setModoAlterar}
                                    modoAlterar={modoAlterar} 
                                    setEntregadorSelecionado={setEntregadorSelecionado} /> :
                <FormCadEntregador listaEntregadores={listaDeEntregadores} 
                                   setListaDeEntregadores={setListaDeEntregadores}
                                   setExibirTabela={setExibirTabela} 
                                   setModoAlterar={setModoAlterar}
                                   modoAlterar={modoAlterar} 
                                   setEntregadorSelecionado={setEntregadorSelecionado} 
                                   entregadorSelecionado={entregadorSelecionado} />
            }
        </Pagina>
    );
}


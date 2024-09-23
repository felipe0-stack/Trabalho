import Pagina from '../layouts/Pagina';
import { Alert } from "react-bootstrap";
import TabelaUsuarios from "./Tabelas/TabelaUsuarios";
import FormCadUsuario from "./Formularios/FormCadUsuario";
import { useState } from "react";

export default function TelaCadastroUsuario(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeUsuarios, setListaDeUsuarios] = useState([]);
    const [modoAlterar, setModoAlterar] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        codigo: 0,
        nome: "",
        email: "",
        senha: ""
    });

    return (
        <Pagina>
            <Alert className="text-center" variant="success">
                <h2 className="text-center">Tela de cadastro de Usuários</h2>
            </Alert>
            {
                exibirTabela ? 
                <TabelaUsuarios listaUsuarios={listaDeUsuarios} setListaDeUsuarios={setListaDeUsuarios}
                                setExibirTabela={setExibirTabela} setModoAlterar={setModoAlterar}
                                modoAlterar={modoAlterar} setUsuarioSelecionado={setUsuarioSelecionado} /> :
                <FormCadUsuario listaUsuarios={listaDeUsuarios} setListaDeUsuarios={setListaDeUsuarios}
                                setExibirTabela={setExibirTabela} setModoAlterar={setModoAlterar}
                                modoAlterar={modoAlterar} 
                                setUsuarioSelecionado={setUsuarioSelecionado} usuarioSelecionado={usuarioSelecionado} />
            }
        </Pagina>
    );
}

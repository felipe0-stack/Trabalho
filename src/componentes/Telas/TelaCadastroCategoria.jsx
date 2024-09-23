import { useState } from "react";
import Pagina from '../layouts/Pagina';
import TabelaCategorias from './Tabelas/TabelaCategorias';
import FormCadCategoria from './Formularios/FormCadCategoria'
import { Alert } from "react-bootstrap";

export default function TelaCadastroCategoria() {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeCategorias, setListaDeCategorias] = useState([]);
    const [modoAlterar, setModoAlterar] = useState(false);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState({
        codigo: "",
        descricao: ""
    });

    return (
        <Pagina>
            <Alert className="text-center" variant="success">
                <h2 className="text-center">Tela de Cadastro de Categorias</h2>
            </Alert>
            {exibirTabela ? 
                <TabelaCategorias
                    listaCategorias={listaDeCategorias}
                    setListaCategorias={setListaDeCategorias}
                    setExibirTabela={setExibirTabela}
                    setModoAlterar={setModoAlterar}
                    setCategoriaSelecionada={setCategoriaSelecionada}
                /> :
                <FormCadCategoria
                    listaCategorias={listaDeCategorias}
                    setListaCategorias={setListaDeCategorias}
                    setExibirTabela={setExibirTabela}
                    modoAlterar={modoAlterar}
                    setModoAlterar={setModoAlterar}
                    categoriaSelecionada={categoriaSelecionada}
                    setCategoriaSelecionada={setCategoriaSelecionada}
                />
            }
        </Pagina>
    );
}

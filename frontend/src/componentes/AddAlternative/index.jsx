import React, { useState } from 'react';
import axios from 'axios';
import * as H from "./styles";

export const AddAlternative = ({ setListaAlternativas }) => {
    const [inputText, setInputText] = useState('');
    const [letra, setLetra] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!inputText || !letra) {
            console.error('Por favor, preencha todos os campos');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3333/CriarAlternativa', { texto: inputText, letra });
            const novaAlternativa = response.data;

            if (typeof setListaAlternativas === 'function') {
                setListaAlternativas(prevAlternativas => [...prevAlternativas, novaAlternativa]);
            } else {
                console.error('Erro: setListaAlternativas não é uma função');
            }

            setInputText('');
            setLetra('');
        } catch (error) {
            console.error('Erro ao criar alternativa:', error);
        }
    };

    const ControlaMostrarFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    return (
        <H.Container>
            <button onClick={ControlaMostrarFormulario}>Criar Questão</button>
            {mostrarFormulario && (
                <form onSubmit={handleSubmit}>
                    <h2>Criar Nova Alternativa</h2>
                    <label>
                        Alternativa:
                        <H.Input>
                            type="text" 
                            value={inputText} 
                            onChange={e => setInputText(e.target.value)}
                        </H.Input> 
                    </label>
                    <br />
                    <label>
                        Letra:
                        <input type="text" value={letra} onChange={e => setLetra(e.target.value)} />
                    </label>
                    <br />
                    <button type="submit">Criar Alternativas</button>
                </form>
            )}
        </H.Container>
    );
};
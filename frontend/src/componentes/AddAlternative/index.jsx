import React, { useState } from 'react';
import axios from 'axios';
import * as H from "./styles";

export const AddAlternative = ({ setListaAlternativas }) => {
    const [inputText, setInputText] = useState('');
    const [letra, setLetra] = useState('');

    const handleAddAlternativa = async () => {
        try {
            const response = await axios.post('/CriarAlternativa', { texto: inputText, letra });
            const novaAlternativa = response.data;
            setListaAlternativas(prevAlternativas => [...prevAlternativas, novaAlternativa]);
            setInputText('');
            setLetra('');
        } catch (error) {
            console.error('Erro ao criar alternativa:', error);
        }
    };

    return (
        <H.Container>
            <H.Input
                type="text"
                placeholder="Letra da alternativa"
                value={letra}
                onChange={e => setLetra(e.target.value)}
            />
            <H.Input
                type="text"
                placeholder="Adicione uma alternativa"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={e => e.key === 'Enter' && handleAddAlternativa()}
            />
            <H.Button onClick={handleAddAlternativa}>Adicionar Alternativa</H.Button>
        </H.Container>
    );
};


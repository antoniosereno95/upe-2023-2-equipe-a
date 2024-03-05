import React from 'react';
import * as C from './styles';
import { Header } from '../../../componentes/Header';
import { AddAlternative } from '../../../componentes/AddAlternative';

export const ListaAlternativas = () => {

  return (
    <C.Container>
      <Header title={'Lista de Alternativas'} />
      <AddAlternative />
    </C.Container>
  );
};

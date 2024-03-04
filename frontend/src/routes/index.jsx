import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormProvas } from '../pages/Home/FormProvas';
import { ListaAlternativas } from '../pages/Home/ListaAlternativas';
import QuestaoHome from '../componentes/Questoes/QuestaoHome';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuestaoHome />} />
        <Route path="/FormProvas" element={<FormProvas />} />
        <Route path="/ListaAlternativas" element={<ListaAlternativas />} />
      </Routes>
    </BrowserRouter>
  );
};
import { AddAlternative } from "../../componentes/AddAlternative";
import { Header } from "../../componentes/Header";
import * as H from "./styles";

export function Home() {

  return (
    <H.Container>
      <Header title={"Home"}/>
      <h1>Home</h1>
      <AddAlternative />
    </H.Container>
  )
}
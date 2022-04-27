
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";


export function App() {

  function teste() {
    return
  }

  return (
    <>
      <Header onOpenNewTransactionModal={teste}/>
      <Dashboard />



      <GlobalStyle />
    </>
  );
}
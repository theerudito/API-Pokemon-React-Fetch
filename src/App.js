import logo from './logo.svg';
import './App.css';
import PeticionHookFetchAsyncAwait from './Componentes/ApiFetchAsyncAwait';
import PeticionHookFetch from './Componentes/FetchPeticionHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>API Pokemon</p>
        {/*<PeticionHookFetch/>/*/}
        <PeticionHookFetchAsyncAwait/>
        <>
        <h5>By Jorge Loor</h5>
        </>
      </header>
        
    </div>
  );
}
export default App;

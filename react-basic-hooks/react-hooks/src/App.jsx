import './App.css';
import HookUseContext from './components/HookUseContext/HookUseContext';
import HookUseEffect from './components/HookUseEffect/HookUseEffect';
import HookUseState from './components/HookUseState/HookUseState';
import HookUseState2 from './components/HookUseState/HookUseState2';
import GlobalState from './context';

function App() {

  return (
    <>
      <div className="App">
        <HookUseState />
        <HookUseState2 />
        <HookUseEffect />
        <GlobalState>
          <HookUseContext />
        </GlobalState>
      </div>
    </>
  )
}

export default App

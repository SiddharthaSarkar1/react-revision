import './App.css';
import TestUseFetch from './components/CustomHook/TestUseFetch';
import HookUseCallback from './components/HookUseCallback/HookUseCallback';
import HookUseContext from './components/HookUseContext/HookUseContext';
import HookUseEffect from './components/HookUseEffect/HookUseEffect';
import HookUseLayoutEffect from './components/HookUseLayoutEffect/HookUseLayoutEffect';
import HookUseMemo from './components/HookUseMemo/HookUseMemo';
import HookUseReducer from './components/HookUseReducer/HookUseReducer';
import HookUseRef from './components/HookUseRef/HookUseRef';
import HookUseState from './components/HookUseState/HookUseState';
import HookUseState2 from './components/HookUseState/HookUseState2';
import LiftingStateUp from './components2/LiftingStateUp/LiftingStateUp';
import UseCallBackHook from './components2/useCallbackHook/UseCallBackHook';
import UseMemoHook from './components2/useMemoHook/UseMemoHook';
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
        <HookUseReducer />
        <HookUseRef />
        <HookUseLayoutEffect />
        <HookUseMemo />
        <HookUseCallback />
        <TestUseFetch />
        <LiftingStateUp />
        <UseMemoHook />
        <UseCallBackHook />
      </div>
    </>
  )
}

export default App

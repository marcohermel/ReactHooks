import React from 'react';
import './App.css';
import Divider from './components/common/Divider';
import SimpleFieldHooks from './components/useStateHook/SimpleFieldHooks';
import SimpleField from './components/useStateHook/SimpleField';
import Form from './components/useCustom/Form';
import FormHooks from './components/useCustom/FormHooks';
import ReduxExemple from './components/ReduxHooks/NormalRedux/ReduxExemple';
import ReduxExempleHooks from './components/ReduxHooks/HooksRedux/ReduxExempleHooks';
import ExempleLifeCycles from './components/useEffect/ExempleLifeCycles';
import ExempleUseEffect from './components/useEffect/ExempleUseEffect';


function App() {
  return (
    <div className="App container">
      <Divider title="useState" left={<SimpleField />} right={<SimpleFieldHooks />} />
      <Divider title="useEffect" left={<ExempleLifeCycles />} right={<ExempleUseEffect />} />
      <Divider title="useCustom" left={<Form />} right={<FormHooks />} />
      <Divider title="useReducer" left={<ReduxExemple />} right={<ReduxExempleHooks />} />
    </div>
  );
}

export default App;

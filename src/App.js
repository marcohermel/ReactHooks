import React from 'react';
import './App.css';
import Divider from './components/common/Divider';
import SimpleFieldHooks from './components/useStateHook/SimpleFieldHooks';
import SimpleField from './components/useStateHook/SimpleField';
import Form from './components/CustomHook/Form';
import FormHooks from './components/CustomHook/FormHooks';
import ReduxExemple  from './components/ReduxHooks/NormalRedux/ReduxExemple';
import ReduxExempleHooks from './components/ReduxHooks/HooksRedux/ReduxExempleHooks';

function App() {
  return (
    <div className="App container">
      <Divider left={ <SimpleField />} right={<SimpleFieldHooks />} />
      <Divider left={ <Form />}  right={<FormHooks />}/>
      <Divider left={ <ReduxExemple />} right={<ReduxExempleHooks/>} />
    </div>
  );
}

export default App;

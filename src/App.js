import React from 'react';
import './App.css';
import Divider from './components/common/Divider';
import FormHooks from './components/useState/FormHooks';
import FormStateful from './components/useState/FormStateful';
import FormInputsStateful from './components/customHooks/FormInputsStateful';

function App() {
  return (
    <div className="App container">
      <Divider left={ <FormStateful />} right={<FormHooks />} />
      {/* <Divider left={ <FormInputsStateful />} /> */}
    </div>
  );
}

export default App;

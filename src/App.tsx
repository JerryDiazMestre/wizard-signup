import React from 'react';
import './App.css';
import './css/Wizard-signup.css';
import UserInformationFormControlled from './components/UserInformation';

function App() {
  return (
    <div className="App">
      <h1>Wizard Signup Wizard</h1>
      <UserInformationFormControlled />
    </div>
  );
}

export default App;

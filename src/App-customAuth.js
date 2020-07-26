import React, { useState } from 'react';
import './App.css';

import { Auth } from 'aws-amplify';

function App() {
  const [componentState, setComponentState] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: '',
    authenticationCode: '',
    step: 0,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setComponentState({ ...componentState, [name]: value });
  };

  const signUp = async () => {
    const { username, password, email, phone_number } = componentState;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, phone_number },
      });
      console.log('successfully signed up');
      setComponentState({ ...componentState, step: 1 });
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };

  const confirmSignUp = async () => {
    const { username, authenticationCode } = componentState;
    try {
      await Auth.confirmSignUp(username, authenticationCode);
      console.log('user successfully signed up!');
    } catch (err) {
      console.log('error confirming sign up: ', err);
    }
  };

  return (
    <div className="App">
      {componentState.step === 0 && (
        <div>
          <input onChange={onChange} placeholder="username" name="username" style={styles.input} />

          <input onChange={onChange} placeholder="password" name="password" style={styles.input} type="password" />
          <input onChange={onChange} placeholder="email" name="email" style={styles.input} />
          <input onChange={onChange} placeholder="phone_number" name="phone_number" style={styles.input} />
          <button onClick={signUp}>Sign Up</button>
        </div>
      )}
      {componentState.step === 1 && (
        <div>
          <input onChange={onChange} placeholder="username" name="username" style={styles.input} />
          <input onChange={onChange} placeholder="authentication code" name="authenticationCode" style={styles.input} />
          <button onClick={confirmSignUp}>Confirm Sign Up</button>
        </div>
      )}
    </div>
  );
}

const styles = { input: { height: 35, margin: 10 } };

export default App;

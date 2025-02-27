import React, { useState } from 'react';
import axios from 'axios';

function Auth() {
  const [email, setEmail] = useState('');
  const [pas, setPas] = useState('');
  const [loading, setLoading] = useState(false);
  const [bolen, setBolen] = useState(false)

  const handlSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = {
      email: email,
      password: pas,
    };
    try {
      await getUser({ email, password: pas });
    } catch (error) {
      console.log(error);
    }
  };

  const handlSubmitButton = (e) => {
    handlSubmit(e)
    div()
  }

  const div = () => {
    if (users) {
      setBolen(true)
    } else {
      setBolen(false)
    }
  }
  const getUser = (user) => {
    return axios
      .post('https://service.res.as-system.uz/v1/auth/sign-in', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        localStorage.setItem('token', response.data.accessToken);
      })
  };

  const inputValue = () => {
    setEmail('')
    setPas('')
  }

  return (
    <div className={style.div_box}>
      <form>
        <label htmlFor="email">E-mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          required
        />

        <label htmlFor="pass">Password</label>
        <input
          value={pas}
          onChange={(e) => setPas(e.target.value)}
          type="password"
          id="pass"
          required
        />

        <div className={style.form_btn}>
          <button disabled={bolen ? true : false} onClick={(e) => handlSubmitButton(e)} type="submit">
            {loading ? 'Loading...' : 'Submit'}
          </button>
          <button onClick={() => inputValue()} type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Auth;

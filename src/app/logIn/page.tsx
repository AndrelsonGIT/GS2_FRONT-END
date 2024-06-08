"use client";
import React, {useState} from 'react';
import styles from './page.module.css';
import Header from "@/app/components/header/Header";
import axios, {AxiosResponse} from "axios";
import Reloading from "@/app/components/Reloading/Reloading";
import Link from "next/link";
import {API_URL} from "@/app/services/configuration";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSendingInfo, setIsSendingInfo] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: FormData = new FormData(event.currentTarget);


    const data = {
      email: formData.get("email"),
      password: formData.get("password")
    }

    try {
      const response: AxiosResponse = await axios.post(API_URL+"/login", JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem('token', response.data.token);
        setIsSendingInfo(true);
      } else {
        window.alert('Erro ao cadastrar');
      }
    } catch (error) {
      console.error('Registration error:', error);
      window.alert('Erro no cadastro. Tente novamente.');
    }


    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.bodyMain}>
      <Header/>
      {!isSendingInfo ? (
          <main className={styles.container}>
            <h2 className={styles.title}>Ocean Guardian</h2>
            <h2 className={styles.subTitle}>LogIn</h2>
            <form onSubmit={handleSubmit} className={styles.container}>
              <div className={styles['input-container']}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className={styles['input-container']}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Senha</label>
              </div>
              <button type="submit" className={styles.button}>Login</button>
            </form>
          </main>
        ) :
        <Reloading reloadingText="Fazendo LogIn" navigateTo="/"/>
      }
      <div className={styles.editPasswordContainer}>
        <Link href="/editPassword"><p>Esqueceu a senha?</p></Link>
      </div>
    </div>
  );
};

export default Login;

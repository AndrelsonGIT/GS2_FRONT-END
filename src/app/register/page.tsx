"use client";
import axios, {AxiosResponse} from 'axios';
import {FormEvent, useState} from 'react';
import Reloading from '@/app/components/Reloading/Reloading';
import styles from "./page.module.css";
import Header from "@/app/components/header/Header";

const FormRegister = () => {
  const [isSendingInfo, setIsSendingInfo] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: FormData = new FormData(event.currentTarget);

    const data = {
      fullName: formData.get('fullname') ,
      email: formData.get('email'),
      password: formData.get('password'),
      houseNumber: formData.get('houseNumber'),
      cep: formData.get('cep'),
    };
    console.log("chegou aqui")
    console.log(data)
    try {
      const response: AxiosResponse = await axios.post('http://localhost:8080/user', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || response.status === 201) {
        console.log('DEU CERTO');
        setIsSendingInfo(true);
      } else {
        window.alert('Erro ao cadastrar');
      }
    } catch (error) {
      console.error('Registration error:', error);
      window.alert('Erro no cadastro. Tente novamente.');
    }
  };

  return (
    <div className={styles.bodyMain}>
      <Header/>
      {!isSendingInfo ? (
        <main className={styles.container}>
          <h2 className={styles.title}>Ocean Guardian</h2>
          <h2 className={styles.subTitle}>Cadastre-se</h2>
          <form onSubmit={handleSubmit} className={styles.container}>
            <div className={styles['input-container']}>
              <input type="text" name="fullname" id="fullname" placeholder=" " required/>
              <label htmlFor="fullname">Nome completo</label>
            </div>
            <div className={styles['input-container']}>
              <input type="email" name="email" id="email" placeholder=" " required/>
              <label htmlFor="email">E-mail</label>
            </div>
            <div className={styles['input-container']}>
              <input type="text" name="cep" id="cep" placeholder=" " required/>
              <label htmlFor="password">CEP</label>
            </div>
            <div className={styles['input-container']}>
              <input type="number" name="houseNumber" id="houseNumber" placeholder=" " required/>
              <label htmlFor="password">Número da sua residência</label>
            </div>

            <div className={styles['input-container']}>
              <input type="password" name="password" id="password" placeholder=" " required/>
              <label htmlFor="password">Senha</label>
            </div>

            <div className={styles['input-container']}>
              <input type="password" name="confirm_password" id="confirm_password" placeholder=" " required/>
              <label htmlFor="confirm_password">Confirmar Senha</label>
            </div>
            <button type="submit" className={styles.button}>Inscrever-se</button>

          </form>

        </main>
      ) : (
        <Reloading reloadingText="Enviando dados do seu formulário" navigateTo="/" />
      )}
    </div>
  );
};

export default FormRegister;

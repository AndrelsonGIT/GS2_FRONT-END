"use client";
import React, {useState} from 'react';
import styles from "./page.module.css";
import Header from "@/app/components/header/Header";
import axios, {AxiosResponse} from "axios";

const ChangePassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isSendingInfo, setIsSendingInfo] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: FormData = new FormData(event.currentTarget);

    const data = {
      newPassword: formData.get('newPassword')
    }

    try {
      const response: AxiosResponse = await axios.patch('http://localhost:8080/user'+email, JSON.stringify(data), {
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

    console.log('Current Password:', email);
    console.log('New Password:', newPassword);
    console.log('Confirm New Password:', confirmNewPassword);
  };

  return (
    <div className={styles.bodyMain}>

      <Header/>
      <main className={styles.container}>
        <h2 className={styles.title}>Ocean Guardian</h2>
        <h2 className={styles.subTitle}>Mudar a senha</h2>
        <form onSubmit={handleSubmit} className={styles.container}>
          <div className={styles['input-container']}>
            <input
              type="text"
              name="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className={styles['input-container']}>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              placeholder=" "
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <label htmlFor="newPassword">Nova senha</label>
          </div>
          <div className={styles['input-container']}>
            <input
              type="password"
              name="confirmNewPassword"
              id="confirmNewPassword"
              placeholder=" "
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
            <label htmlFor="confirmNewPassword">Confirmar nova senha</label>
          </div>
          <button type="submit" className={styles.button}>Mudar a senha</button>
        </form>
      </main>
    </div>
  );
};

export default ChangePassword;

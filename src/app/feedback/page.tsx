"use client";
import axios from 'axios';
import {API_URL} from "@/app/services/configuration";
import React, {FormEvent, useState} from 'react';
import Reloading from "@/app/components/Reloading/Reloading";
import styles from "./page.module.css";
import Header from "@/app/components/header/Header";

interface feedbackRequestData {
  category: string;
  text: string;
  grade: number;
}

const FeedbackPage = () => {
  const [isSendingInfo, setIsSendingInfo] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data: feedbackRequestData = {
      category: formData.get('feedbackOption') as string,
      text: formData.get('feedback') as string,
      grade: parseInt(formData.get('feedbackNote') as string, 10),
    };

    try {
      await axios.post(`${API_URL}/feedback`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      window.alert('Registrado com sucesso');

      setIsSendingInfo(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.bodyContent}>
      <Header/>
      {!isSendingInfo ? (
        <main className={styles.main}>
          <h2 className={styles.titleCompany}>Ocean Guardian</h2>
          <h2>Enviar feedback</h2>
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.selectContainer}>
              <select
                name="feedbackOption"
                id="feedbackOption"
                className={styles.select}
                required
              >
                <option value="">Selecione uma opção de feedback</option>
                <option value="Navegacao">Navegação</option>
                <option value="Plataforma Web">Plataforma</option>
                <option value="Other">Outros</option>
              </select>
            </div>

            <div className={styles.selectContainer}>
              <select className={styles.select} name="feedbackNote" id="feedbackNote">
                <option value={5}>5 - Fantástico</option>
                <option value={4}>4 - Ótimo</option>
                <option value={3}>3 - Okay</option>
                <option value={2}>2 - Ruim</option>
                <option value={1}>1 - Terrível</option>
              </select>

            </div>

            <div className={styles.textareaContainer}>
                            <textarea
                              name="feedback"
                              id="feedback"
                              className={styles.textarea}
                              placeholder=""
                              minLength={30}
                              required
                            />
              <label
                htmlFor="feedback"
                className={styles.label}
              >
                Escreva o seu feedback
              </label>
            </div>

            <div className={styles.buttonContainer}>
              <button
                type="submit"
                className={styles.button}
              >
                Enviar feedback
              </button>
            </div>
          </form>
        </main>
      ) : (
        <Reloading reloadingText="Enviando o seu feedback" navigateTo="/" />
      )}
    </div>
  );
};

export default FeedbackPage;

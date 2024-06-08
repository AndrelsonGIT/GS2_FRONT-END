"use client";

import React, {ChangeEvent, FormEvent, useState} from 'react';
import axios from 'axios';
import styles from "./page.module.css";
import Header from "@/app/components/header/Header";
import {API_URL} from "@/app/services/configuration";

interface OceanObject {
  objectType: string;
  objectWeight: number;
}

const OceanDataForm = () => {
  const [oceanType, setOceanType] = useState('');
  const [recordDate, setRecordDate] = useState('');
  const [waterTemperature, setWaterTemperature] = useState('');
  const [waterPollutionLevel, setWaterPollutionLevel] = useState('');
  const [oceanObjects, setOceanObjects] = useState<OceanObject[]>([]);
  const [newObjectType, setNewObjectType] = useState('');
  const [newObjectWeight, setNewObjectWeight] = useState('');

  const handleAddOceanObject = () => {
    const newOceanObject: OceanObject = {
      objectType: newObjectType,
      objectWeight: parseFloat(newObjectWeight)
    };
    setOceanObjects([...oceanObjects, newOceanObject]);
    setNewObjectType('');
    setNewObjectWeight('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      oceanType,
      recordDate,
      waterTemperature: parseFloat(waterTemperature),
      waterPollutionLevel: parseFloat(waterPollutionLevel),
      oceanObjects,
    };

    console.log(data)

    try {
      const response = await axios.post(API_URL+'/oceanData', data);
      console.log(response);
      setOceanType('');
      setRecordDate('');
      setWaterTemperature('');
      setWaterPollutionLevel('');
      setOceanObjects([]);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className={styles.main}>
      <Header/>

      <main className={styles['form-container']}>
        <h1>Formulário dados oceano</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Tipo Oceano:
            <input
              type="text"
              value={oceanType}
              onChange={(e) => setOceanType(e.target.value)}
              required
            />
          </label>
          <label>
            Data de Registro:
            <input
              type="datetime-local"
              value={recordDate}
              onChange={(e) => setRecordDate(e.target.value)}
              required
            />
          </label>
          <label>
            Temperatura da Agua em Graus Celsius:
            <input
              type="number"
              value={waterTemperature}
              onChange={(e) => setWaterTemperature(e.target.value)}
              required
            />
          </label>
          <label>
            Nível de Poluição da Água em %:
            <input
              type="number"
              value={waterPollutionLevel}
              onChange={(e) => setWaterPollutionLevel(e.target.value)}
              required
            />
          </label>
          <div className={styles['ocean-objects-container']}>
            <h2>Objetos encontrados no oceano</h2>
            {oceanObjects.map((object: OceanObject, index) => (
              <div key={index}>
                <p>Type: {object.objectType}</p>
                <p>Weight: {object.objectWeight} kg</p>
              </div>
            ))}
            <div className={styles['new-ocean-object-container']}>
              <label>
                Tipo de objeto:
                <input
                  type="text"
                  value={newObjectType}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setNewObjectType(e.target.value)}
                />
              </label>
              <label>
                Peso do Objeto (kg):
                <input
                  type="number"
                  value={newObjectWeight}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setNewObjectWeight(e.target.value)}
                />
              </label>
              <button type="button" onClick={handleAddOceanObject}>Add Ocean Object</button>
            </div>
          </div>
          <button type="submit">enviar</button>
        </form>
      </main>

    </div>
  );
};

export default OceanDataForm;

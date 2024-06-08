"use client";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {API_URL} from "@/app/services/configuration";
import styles from './page.module.css';
import Header from "@/app/components/header/Header";

interface OceanObject {
  id: number;
  objectType: string;
  objectWeight: number;
}

interface OceanData {
  id: number;
  oceanType: string;
  recordDate: number[];
  waterTemperature: number;
  waterPollutionLevel: number;
  oceanObjects: OceanObject[];
}

export default function OceanDataPage() {
  const [data, setData] = useState<OceanData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<OceanData[]>(API_URL+'/oceanData');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData().then((data)=>console.log(data));
  }, []);

  return (
    <div>
      <Header/>
    <div className={styles.container}>

      <h1 className={styles.heading}>Dados do Oceano</h1>
      <div className={styles.summary}>
        <h2>Resumo dos Dados</h2>
        <p>Total de registros: {data.length}</p>
        <p>Temperatura média da água: {calculateAverageWaterTemperature(data)} °C</p>
        <p>Nível médio de poluição da água: {calculateAverageWaterPollutionLevel(data)}</p>
      </div>
      <div className={styles.records}>
        <h2>Registros</h2>
        <table className={styles.table}>
          <thead>
          <tr>
            <th>Tipo de Oceano</th>
            <th>Temperatura da Água</th>
            <th>Nível de Poluição da Água</th>
            <th>Número de Objetos</th>
          </tr>
          </thead>
          <tbody>
          {data.map((record) => (
            <tr key={record.id}>
              <td>{record.oceanType}</td>
              <td>{record.waterTemperature} °C</td>
              <td>{record.waterPollutionLevel}</td>
              <td>{record.oceanObjects.length}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

function calculateAverageWaterTemperature(data: OceanData[]): number {
  const total = data.reduce((acc, record) => acc + record.waterTemperature, 0);
  return total / data.length;
}

function calculateAverageWaterPollutionLevel(data: OceanData[]): number {
  const total = data.reduce((acc, record) => acc + record.waterPollutionLevel, 0);
  return total / data.length;
}

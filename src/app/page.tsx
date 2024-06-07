import styles from "./page.module.css";
import Header from "./components/header/Header";
import InfoCard from "@/app/components/InfoCard/InfoCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <div className={styles.mainTitleBlock}>
        <h2 >PRAZER EM MANTER O OCEANO <span className={styles.blueText}>AZUL</span></h2>
      </div>

      <div className={styles.textApresentation}>
        <h2>Mergulhe na nossa solução</h2>
        <img src="https://i.ibb.co/4RMCVGd/580b57fbd9996e24bc43bcd3.png" alt="tubarão"/>
        <p>Nossa solução envolve o uso de frotas marítimas que estão equipadas com sensores avançados que capturam uma ampla variedade de dados, incluindo a localização, tipo e quantidade de resíduos encontrados no mar. Esses dados são transmitidos para sistemas de inteligência artificial que processam e analisam as informações em tempo real. Através de algoritmos sofisticados, a IA é capaz de identificar padrões e prever áreas mais suscetíveis ao acúmulo de lixo marinho.</p>
      </div>

      <div className={styles.infoCardsContainer}>
        <div className={styles.infoCardContentLeft}>
          <InfoCard imgURL="https://i.ibb.co/cQwJjfG/8439030-1.png"
                    title="1º COLETAR DADOS"
                    description="Iniciar a coleta de dados sobre a presença e tipo de resíduos no mar,
                   registrando informações como localização, quantidade e tipo de material coletado."/>

        </div>
        <div className={styles.infoCardContentRight}>

          <InfoCard imgURL="https://i.ibb.co/474G3Mb/kisspng-portable-network-graphics-c
          mputer-icons-the-noun-signal-svg-png-icon-free-download-495973-o.png"
                    title="2º Transmitir os Dados"
                    description="Configurar os dispositivos para transmitir dados coletados em
                     tempo real para um servidor central." />
        </div>

        <div className={styles.infoCardContentLeft}>


        <InfoCard imgURL="https://i.ibb.co/zVFm9Vf/processamento-de-dados.png"
                  title="3º Processar os dados"
                  description="Armazenar os dados em um banco de dados seguro e escalável, limpá-los para remover
                   inconsistências e prepará-los para análise. Utilizar ferramentas de análise de dados para obter
                    uma visão preliminar e identificar padrões básicos." />
        </div>
        <div className={styles.infoCardContentRight}>


        <InfoCard imgURL="https://i.ibb.co/kJ4xB6D/inteligencia-artificial.png"
                  title="4º APLICAR INTELIGENCIA ARTIFICIAL"
                  description="Criar e treinar modelos de inteligência artificial para analisar os dados coletados.
                   Usar algoritmos de aprendizado de máquina para identificar padrões e prever áreas mais propensas
                    ao acúmulo de resíduos." />
        </div>

        <div className={styles.infoCardContentLeft}>


        <InfoCard imgURL="https://i.ibb.co/s18PGnh/pngegg-3.png"
                  title="5º Processar os dados"
                  description="Usar os insights da análise de IA para planejar operações de limpeza mais eficientes,
                   direcionar as frotas para hotspots de resíduos e implementar técnicas de remoção nas
                    áreas identificadas." />
        </div>

        <div className={styles.infoCardContentRight}>


        <InfoCard imgURL="https://i.ibb.co/0fKbDmw/pngwing-com-7.png"
                  title="6º Divulgacao e sensibilizacao dos Dados"
                  description="Publicar relatórios regulares sobre as operações de limpeza e os resultados obtidos,
                   realizar campanhas educativas para aumentar a conscientização pública sobre a importância da
                   preservação dos oceanos, e estabelecer parcerias com organizações ambientais e governamentais
                    para ampliar o impacto das iniciativas." />
        </div>

        <div className={styles.infoCardContentLeft}>

        <InfoCard imgURL="https://i.ibb.co/Hzt4dG8/kisspng-environmental-impact-assessment-evaluacin-ambien-5b6f48fdde5f98-4933368215340198379109.png"
                  title="7º Avaliacao de impacto"
                  description="Avaliar os impactos ambientais e sociais das operações de limpeza, coletar feedback
                   de todas as partes interessadas para melhorar continuamente as operações, e preparar e divulgar
                   relatórios detalhados sobre o impacto das iniciativas na saúde dos oceanos." />
        </div>
      </div>
    </main>
  );
}

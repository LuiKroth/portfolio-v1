
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import test1 from '../public/test1.jpg'
import React from 'react'
import NavBar from '../components/NavBarPt'

const PTBR: NextPage = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title>Kroth</title>
        <meta name="description" content="Portfolio." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <div className={styles.layout}>
        <NavBar/>
        <div className={styles.content}>
          <main>
            <section className={styles.main}>
              <div className={styles.mainText}>
                <h1>
                  <p className={styles.salution}> Oi, meu nome é</p>
                  <p className={styles.name}>Luiz Kroth.</p>
                  <p className={styles.work}> Eu sou um estudante de Engenharia de Software.</p>
                  <p className={styles.who}>Eu sou um estudante Brasileiro de Engenharia de Software na Univates.</p>
                </h1>
              </div>
            </section>
            <section className={styles.AboutMe} id='AboutMe'>
              <h2 className={styles.Title}>Sobre Mim</h2>
              <div className={styles.Resume}>
                <div className={styles.AboutPicture}>
                  <Image src={test1} className={styles.ProfilePic} alt="High School Graduation 2019"></Image>
                </div>
                <div className={styles.AboutText}>
                  <p>
                  <a className={styles.highlight}>Saudações!</a> Meu nome é <a className={styles.highlight}>Luiz</a>, tenho <a className={styles.highlight}>20 anos</a> e atualmente estou me graduando em Engenharia de Software na
                    <a className={styles.highlight} href={'https://www.univates.br/'} target="_blank" rel="noreferrer"> Univates</a>. Durante esses dois anos me dediquei exclusivamente aos meus estudos, 
                    e agora que a situação da pandemia está sob controle sinto que é a hora de obter experiência prática em procurar pelo meu primeiro estágio. 
                    Eu comecei a aprender a programar no primeiro semestre de 2020, quando entrei na Univates.
                    A primeira linguagem que aprendi lá foi <a className={styles.highlight}>Java</a>, quando ganhei conhecimento sobre
                    variáveis, loops, arrays, classes, herança, ...
                  </p>
                  <p>  
                    Na metade de 2021 comecei a estudar por conta própria <a className={styles.highlight}>JavaScript</a>, <a className={styles.highlight}>HTML</a> e <a className={styles.highlight}>CSS </a>, 
                    e atualmente estou aprendendo <a className={styles.highlight}>TypeScript</a>, inclusive este portfolio inteiro foi escrito utilizando <a className={styles.highlight}>TypeScript </a> 
                    e <a className={styles.highlight}>Next.Js</a>, e possui um design completamente <a className={styles.highlight}>responsivo</a>.
                  </p>
                  <p>  
                    Desde pequeno venho me <a className={styles.highlight}>adaptando</a> a grandes mudanças, quando eu tinha 4 anos meu pai foi transferido para o <a className={styles.highlight}>Equador</a>, lá eu estudei em duas escolas diferentes,<a className={styles.highlight} href={'https://cotopaxi.k12.ec/'} target="_blank" rel="noreferrer"> Academia Cotopaxi International School</a> e <a className={styles.highlight} href={'https://sekquito.com/en/en-home/'} target="_blank" rel="noreferrer">SEK</a>, 
                    então minha alfabetização ocorreu em 2 idiomas diferentes. 
                    E mesmo eu não tendo mais contato com o espanhol, Eu estudo <a className={styles.highlight}>Inglês</a> desde sempre, e hoje é provavelmente <a className={styles.highlight}>meu recurso mais útil</a>, para <a className={styles.highlight}>pesquisar/estudar </a> 
                    conteúdos e também para meu próprio <a className={styles.highlight}>entretenimento</a>,<a className={styles.highlight}> pelo menos 80% do conteúdo que consumo hoje em dia está em Inglês.</a>
                  </p>
                  <p>
                    Meu foco agora é em ganhar mais <a className={styles.highlight}>experiência</a> e <a className={styles.highlight}>conhecimento</a> para me desenvolver cada vez mais, e para então, <a className={styles.highlight}>contribuir com o crescimento de empresas.</a>
                  </p>
                  <p>
                     Algumas das <a className={styles.highlight}>linguagens de programação</a> e <a className={styles.highlight}>tecnologias</a> que estou usando/aprendendo atualmente:
                  </p>
                  <ul className={styles.TechSkills}>
                    <li>TypeScript</li>
                    <li>Linux (Debian 11)</li>
                    <li>Next.Js</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className={styles.Projects} id='Projects'>
              <h2 className={styles.Title}>Projetos</h2>
              <div className={styles.ProjectsField}>
                <div className={styles.Project}>
                  <a className={styles.Link} href='https://github.com/LuiKroth/portfolio-v1' target="_blank" rel="noreferrer"></a>
                  <div className={styles.ProjectText}>
                   <span className={styles.ProjectTitle}>Portfolio-v1</span>
                   <i className={`fa fa-github ${styles.ProjectLogo}`}></i>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.Contact} id='Contact'>
              <div className={`${styles.mainText} ${styles.Social}`}>
                <h1>
                  <p>Quer conversar?</p>
                  <p>Atualmente estou procurando por oportunidades de estágio!</p>
                </h1>
                <a href='mailto:luiz.kroth1@universo.univates.br' target="_blank" rel="noreferrer" className={styles.sendMessage}>
                  <b><p>Mande uma mensagem!</p></b>
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
};

export default PTBR
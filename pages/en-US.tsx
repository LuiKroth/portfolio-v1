
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import test1 from '../public/test1.jpg'
import React from 'react'
import NavBar from '../components/NavBarPt'

const Home: NextPage = () => {
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
                  <p className={styles.salution}> Hello there, my name is</p>
                  <p className={styles.name}>Luiz Kroth.</p>
                  <p className={styles.work}> I &apos;m a Software Engineer Student.</p>
                  <p className={styles.who}>I&apos;m a brazilian software engineer student at Univates.</p>
                </h1>
              </div>
            </section>
            <section className={styles.AboutMe} id='AboutMe'>
              <h2 className={styles.Title}>About Me</h2>
              <div className={styles.Resume}>
                <div className={styles.AboutPicture}>
                  <Image src={test1} className={styles.ProfilePic} alt="High School Graduation 2019"></Image>
                </div>
                <div className={styles.AboutText}>
                  <p>
                  <a className={styles.highlight}>Greetings!</a> My name is <a className={styles.highlight}>Luiz</a> and I&apos;m a 20 years old software engineer student at
                    <a className={styles.highlight} href={'https://www.univates.br/'} target="_blank" rel="noreferrer"> Univates</a>.I&apos;ve developed some skills along my life and also along these 2 years of graduation. And now that the pandemic situation is under control I feel 
                    confortable looking for my first internship.
                    I began learning how to code in the first half of 2020, when i joined Univates.
                    The first coding language I learned there was <a className={styles.highlight}>Java</a>, where I gained an understanding
                    of variables, loops, arrays, classes, inheritance, ...
                  </p>
                  <p>  
                    In the middle of 2021 I started studying <a className={styles.highlight}>JavaScript</a>, <a className={styles.highlight}>HTML</a> and <a className={styles.highlight}>CSS </a> by my own, and 
                    now I&apos;m currently learning <a className={styles.highlight}>TypeScript</a>, in fact this whole portfolio was made using <a className={styles.highlight}>TypeScript </a> 
                    and <a className={styles.highlight}>Next.Js</a>, its also full <a className={styles.highlight}>responsive</a>.
                  </p>
                  <p>  
                    Since young I&apos;ve <a className={styles.highlight}>experienced</a> big changes, when I was 4 years old my father got transfered to <a className={styles.highlight}>Ecuador</a>, there I studied in two different schools,<a className={styles.highlight} href={'https://cotopaxi.k12.ec/'} target="_blank" rel="noreferrer"> Academia Cotopaxi International School</a> and <a className={styles.highlight} href={'https://sekquito.com/en/en-home/'} target="_blank" rel="noreferrer">SEK</a>, so my literacy happened in two different languages. 
                    And even though I&apos;m not close to spanish language anymore, I study <a className={styles.highlight}>english</a> since always, and today it is probably my <a className={styles.highlight}>most useful resource</a>, for <a className={styles.highlight}>researching </a> 
                    things and also for my own <a className={styles.highlight}>entertainment</a>,<a className={styles.highlight}> at least 80% of the content I consume today is 
                    in english.</a>
                  </p>
                  <p>
                    My will is to gain more <a className={styles.highlight}>experience</a> and <a className={styles.highlight}>knowledge</a> to desenvolve myself more and more, and there so, <a className={styles.highlight}>to contribute to the company&apos;s growth.</a>
                  </p>
                  <p>
                     Some <a className={styles.highlight}>programming languages</a> and <a className={styles.highlight}>technologies</a> that I&apos;m currently using/learning:
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
              <h2 className={styles.Title}>Projects</h2>
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
                  <p>Want to talk?</p>
                  <p>I&apos;m currently searching for internships and jobs oportunities!</p>
                </h1>
                <a href='mailto:luiz.kroth1@universo.univates.br' target="_blank" rel="noreferrer" className={styles.sendMessage}>
                  <b><p>Send me a message!</p></b>
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
};

export default Home

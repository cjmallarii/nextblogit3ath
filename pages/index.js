import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <hr></hr>
        <p align="center"><strong>Introduction</strong></p>
        <p align="center">I’m Carl Mallari, 20 years old from Sta.Ana, Pampanga. My hobbies are playing video games and listening to music, my favourite food is basta pagkain sir, wala ng favorite favorite.</p>
        <br></br>
        <hr></hr>
        <p align="center"><strong>Why IT?</strong></p>
        <p align="center">I took up IT because I want to develop a game that will be world-renowned.</p>
        <br></br>
        <hr></hr>
        <p align="center"><strong> What career do I see myself exploring after graduation?
        </strong></p>
        <p align="center">To be honest, as of now I don't have any vision after I graduate because I’m still exploring my course.</p>
        <br></br>
        <hr></hr>
        <p align="center"><strong>What do I expect from this subject?</strong></p>
        <p align="center">I expect to learn a new programming language and enhanced the old ones that I already know.</p>
        <br></br>
        <hr></hr>
        <p align="center"><strong>What topics do I want to be discussed in this subject?</strong></p>
        <p align="center">The topics that I want to be discussed in this subject is maybe Basic HTML,CSS,and NodeJS. Maybe some basic knowledge for GitHub and Vercel</p>
        <hr></hr>
        <br></br>
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
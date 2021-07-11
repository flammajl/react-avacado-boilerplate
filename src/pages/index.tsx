import { Main } from 'components/Main';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <Main />
    </>
  );
}

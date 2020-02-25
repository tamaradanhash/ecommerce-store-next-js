import Head from 'next/head';
import Link from 'next/link';
export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>mx eCommerce Store</header>
      <main>
        <h1>About</h1>
        <p>
          {' '}
          check out our{' '}
          <Link href="/">
            <a>Home Page</a>
          </Link>
        </p>
      </main>
    </>
  );
}

import Head from 'next/head';

import Card from '../components/Card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>They Should Have...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-grow">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row flex-wrap items-center justify-center px-10 py-20 text-center border-b border-gray-300">
            <h1 className="p-5 py-6 text-5xl font-thin text-gray-700 ">
              They should have...
            </h1>
            <input className="h-full max-w-full p-5 text-5xl font-thin text-gray-700 border border-gray-300 rounded-lg focus:outline-none "></input>
            <button className="h-full px-5 py-3 m-10 text-2xl font-thin bg-gray-300 border-gray-500 rounded">
              Submit
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          {/* Menu */}
          <div className="flex flex-row flex-wrap justify-center ">
            <select className="p-2 my-5 text-2xl font-light border border-gray-400 rounded focus:outline-none">
              <option>Newest</option>
              <option>Oldest</option>
              <option>Most Popular</option>
            </select>
            <input
              placeholder="Search..."
              className="h-full p-2 mx-2 text-2xl font-light border border-gray-400 rounded lg:my-5 focus:outline-none "></input>
          </div>
          {/* Badges */}
          <div className="flex flex-row flex-wrap justify-center">
            <Card>
              Dolor commodo est consectetur eiusmod quis est eiusmod do quis in
              sit ea adipisicing.
            </Card>
            <Card>Deserunt consequat anim exercitation do velit est quis.</Card>
            <Card>Nulla deserunt laboris aliqua amet aliquip elit.</Card>
            <Card>
              Non exercitation reprehenderit aute ut velit consequat occaecat
              dolor ea anim.
            </Card>
            <Card>
              Quis aute magna commodo nulla do duis duis incididunt aliqua culpa
              adipisicing duis cillum exercitation.
            </Card>
            <Card>Quis elit elit ullamco nostrud exercitation.</Card>
            <Card>
              Incididunt et ipsum cillum Lorem consequat enim do occaecat eu
              pariatur qui sunt in amet.
            </Card>
            <Card>Nostrud sit eiusmod et id incididunt officia.</Card>
            <Card>
              Esse pariatur proident duis deserunt eu cillum proident et tempor
              ad fugiat sint fugiat.
            </Card>
            <Card>
              Nisi nostrud dolor amet aliqua sunt est eu ad et in ad eu
              consectetur.
            </Card>
            <Card>
              Lorem nulla in deserunt esse deserunt deserunt ullamco consectetur
              eu magna proident.
            </Card>
          </div>
        </div>
      </div>

      <footer className="flex flex-col items-center justify-center h-20 border">
        <a href="https://tylerstephenmaschino.com">
          Made by Tyler Stephen Maschino
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  );
}

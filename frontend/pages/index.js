import Head from 'next/head';
import Share from '../components/Share';
import Heart from '../components/Heart';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>They Should Have...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col flex-grow">
        <div className="flex flex-col justify-center h-40 border">
          <div className="flex flex-row justify-center w-full">
            <h1 className="p-5 text-5xl font-bold text-gray-700">
              They should have...
            </h1>
            <input className="p-2 text-4xl font-thin border border-gray-300 rounded-lg " />
          </div>
        </div>
        <div className="flex flex-col">
          {/* Menu */}
          <div className="flex flex-row justify-end w-1/3 border border-red-500">
            <select className="p-2 text-2xl font-light border border-gray-400 rounded">
              <option>Newest</option>
              <option>Oldest</option>
              <option>Most Popular</option>
            </select>
            <input
              placeholder="Search..."
              className="p-2 text-2xl font-light border border-gray-400 rounded "></input>
          </div>
          {/* Badges */}
          <div>
            <div className="max-w-xs px-5 border rounded-lg shadow-lg">
              <p className="pt-5 text-xl leading-7 tracking-wide">
                ...a way to keep track of all your subscriptions in one place
              </p>
              <div className="flex flex-row items-center justify-between py-5 flex-nowrap">
                <p className="font-light ">December 21, 2020</p>
                <div className="flex flex-row justify-center align-middle">
                  <button className="p-1 mr-1">
                    <Share className=""></Share>
                  </button>
                  <button className="p-1 ml-1">
                    <Heart className=""></Heart>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>Placeholder for divs</div>
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

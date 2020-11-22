import Head from 'next/head';
import Card from '../components/Card';

import { useState, useEffect } from 'react';

import {
  useQuery,
  useMutation,
  QueryCache,
  ReactQueryCacheProvider,
  queryCache,
} from 'react-query';

export default function Home() {
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createCard({ newCard });
      setNewCard('');
      await queryCache.refetchQueries('cardData');
    } catch (err) {
      console.err(err);
    }
  }

  async function handleChange(e) {
    e.preventDefault();
    try {
      await setSortBy(e.target.value);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleClick(e, id, toggle) {
    try {
      console.log(`You toggled ${id} to ${toggle}`);
      await updateHearts(id, toggle);
      await queryCache.refetchQueries('cardData');
    } catch (err) {
      console.error(err);
    }
  }

  function updateHearts(id, toggle) {
    console.log(toggle);
    return fetch('https://they-should-have.herokuapp.com/api/card/heart', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ id, toggle }),
    }).then((res) => res.json());
  }

  function getCardData() {
    console.log(search);
    return fetch(
      `https://they-should-have.herokuapp.com/api/card?sortBy=${sortBy}&search=${search}`,
      {
        method: 'GET',
        mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      }
    ).then((res) => res.json());
  }

  const [newCard, setNewCard] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [search, setSearch] = useState('');
  const cards = useQuery(['cardData'], () => getCardData());
  const [favoriteCard, ,] = useMutation((id, toggle) =>
    updateHearts(id, toggle)
  );

  const [
    createCard,
    {
      status,
      isIdle,
      isLoading: mutationLoading,
      isSuccess,
      isError,
      error: mutationError,
      reset,
    },
  ] = useMutation(() =>
    fetch(`https://they-should-have.herokuapp.com/api/card`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ description: newCard }),
    }).then((res) => res.json())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>They Should Have...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-grow">
        <div className="flex flex-col justify-center">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-row flex-wrap items-center justify-center px-10 py-20 text-center border-b border-gray-300">
            <h1 className="p-5 py-6 text-5xl font-thin text-gray-700 ">
              They should have...
            </h1>
            <input
              className="h-full max-w-full p-5 text-5xl font-thin text-gray-700 border border-gray-300 rounded-lg focus:outline-none"
              onChange={(e) => setNewCard(e.target.value)}
              value={newCard}></input>
            <button
              className="h-full px-5 py-3 m-10 text-2xl font-thin bg-gray-300 border-gray-500 rounded"
              type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col">
          {/* Menu */}
          {/* <div className="flex flex-row flex-wrap justify-center ">
            <select
              value={sortBy}
              onChange={(e) => handleChange(e)}
              className="p-2 my-5 text-2xl font-light border border-gray-400 rounded focus:outline-none">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="popularity">Most Popular</option>
            </select>
            <input
              value={search}
              onChange={async (e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search..."
              className="h-full p-2 mx-2 text-2xl font-light border border-gray-400 rounded lg:my-5 focus:outline-none "></input>
          </div> */}
          {/* Badges */}
          <div className="flex flex-row flex-wrap justify-center">
            {cards.data &&
              cards.data.map((card) => (
                <Card
                  key={card._id}
                  date={card.date}
                  handleClick={handleClick}
                  id={card._id}
                  hearts={card.hearts}>
                  {card.description}
                </Card>
              ))}
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

import Share from './Share';
import Heart from './Heart';
import { getMonthName } from '../utils/dates';
import { useState } from 'react';

export default function Card({ date, children, handleClick, id, hearts }) {
  const [love, setLove] = useState(false);
  return (
    <div className="h-full max-w-xs px-5 m-5 border rounded-lg shadow-lg w-72">
      <p className="pt-5 text-xl leading-7 tracking-wide">{children}</p>
      <div className="flex flex-row items-center justify-between py-5 flex-nowrap">
        <p className="mr-5 font-light">
          {getMonthName(new Date(date).getMonth()) +
            ` ` +
            new Date(date).getDate() +
            `, ` +
            new Date(date).getFullYear()}
        </p>
        <div className="flex flex-row items-center justify-center align-middle">
          <button className="p-1">
            <Share className=""></Share>
          </button>
          <button
            className="flex flex-row items-center justify-center align-middle focus:outline-none"
            onClick={async (e) => {
              await handleClick(e, id, !love);
              setLove(!love);
            }}>
            <p className="p-1">{hearts}</p>
            <Heart className="" love={love}></Heart>
          </button>
        </div>
      </div>
    </div>
  );
}

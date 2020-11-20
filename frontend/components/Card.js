import Share from './Share';
import Heart from './Heart';

export default function Card({ children }) {
  return (
    <div className="h-full max-w-xs px-5 m-5 border rounded-lg shadow-lg">
      <p className="pt-5 text-xl leading-7 tracking-wide">{children}</p>
      <div className="flex flex-row items-center justify-between py-5 flex-nowrap">
        <p className="font-light ">November 21, 2020</p>
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
  );
}

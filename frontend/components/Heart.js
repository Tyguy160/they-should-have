export default function Heart({ className, love }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="25"
      height="25"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={love ? '#8B5CF6' : '#2c3e50'}
      fill={love ? '#8B5CF6' : 'none'}
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>
  );
}

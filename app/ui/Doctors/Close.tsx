interface CloseProps {
  onClick?: () => void;
}

export default function Close({ onClick }: CloseProps) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <path d="M1 1.5L27.5 28" stroke="#033234" stroke-width="2" />
      <path d="M28 1.5L1.5 28" stroke="#033234" stroke-width="2" />
    </svg>
  );
}

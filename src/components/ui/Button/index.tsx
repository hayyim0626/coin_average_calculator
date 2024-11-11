"use client";

interface PropType {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<PropType> = (props) => {
  const { text, onClick, disabled = false, className } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-xl font-bold text-white bg-blue-500 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

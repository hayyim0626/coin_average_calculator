'use client';
interface PropType {
  value: string | number;
  setValue: (value: string | number) => void;
  className: string;
}
const Input: React.FC<PropType> = (props) => {
  const { value, setValue, className = '' } = props;
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={className}
    />
  );
};

export default Input;

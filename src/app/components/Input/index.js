function Input({ type, placeholder, value, onChange, className, id }) {
  return (
    <input
      id={id}
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;

const Button = ({ label = 'Button', onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '8px 12px', borderRadius: 8 }}>
      {label}
    </button>
  );
};

export default Button;

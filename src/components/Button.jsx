const Button = () => ({ label = 'Button', onClick }) {
  return (
    <button onClick={onClick} style={{ padding: '8px 12px', borderRadius: 6 }}>
      {label}
    </button>
  );
}

export default Button
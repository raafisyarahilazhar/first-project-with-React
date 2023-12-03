function Button(props) {
  const { text, children } = props;
  return (
    <button className="bg-blue-950 text-white py-2 px-4 mt-4 rounded" {...props}>
      {text || children}
    </button>
  );
}

export default Button;

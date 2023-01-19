import "./ErrorComp.css"; // import your css file

const ErrorComp = ({ message }) => {
  return <div className="error-container">{message}</div>;
};

export default ErrorComp;

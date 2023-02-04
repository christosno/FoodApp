const ErrorComp = ({ message }) => {
  console.log("Error Component");
  return <div className="error-container">{message}</div>;
};

export default ErrorComp;

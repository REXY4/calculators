import Alert from 'react-bootstrap/Alert';

function AlertBasic({ type, message }) {
  return (
    <>
      {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
        .filter((fil) => fil === type)
        .map((variant) => (
          <Alert
            style={{
              height: '100%'
            }}
            key={variant}
            variant={variant}>
            {message}
          </Alert>
        ))}
    </>
  );
}

export default AlertBasic;

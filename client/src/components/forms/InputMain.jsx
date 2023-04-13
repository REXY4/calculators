import Form from 'react-bootstrap/Form';

function InputMain({ label, name, type = 'text', placeholder, onChange }) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        onChange={onChange}
        autoComplete
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
    </Form.Group>
  );
}

export default InputMain;

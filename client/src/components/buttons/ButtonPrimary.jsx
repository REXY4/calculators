import './styles.css';
import { Button } from 'react-bootstrap';

export function ButtonPrimary({
  label = '',
  onClick = null,
  background,
  color,
  width,
  height,
  type,
  variant
}) {
  return (
    <Button
      id="button-primary"
      type={type}
      onClick={onClick}
      variant={variant}
      style={{
        background,
        color,
        width,
        height
      }}>
      {label}
    </Button>
  );
}

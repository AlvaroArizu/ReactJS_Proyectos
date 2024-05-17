import { Button, Spinner } from "react-bootstrap";

function ButtonSpinner({
  variant = "primary",
  type = "submit",
  label,
  loading,
}) {
  return (
    <Button variant={variant} type={type} disabled={loading}>
      {loading && <Spinner animation="border" size="sm" />}
      {label}
    </Button>
  );
}
export default ButtonSpinner;

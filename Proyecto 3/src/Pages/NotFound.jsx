import React from "react";

function NotFound() {
  return (
    <div style={styles.container}>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no pudo ser encontrada.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
};

export default NotFound;
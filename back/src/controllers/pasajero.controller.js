export const obtenerPasajeros = (req, res) => {
  res.status(200).send('envio de pasajeros');
};

export const obtenerPasajero = (req, res) => {
  res.status(200).send('envio de pasajero');
};

export const crearPasajero = (req, res) => {
  res.status(200).send('crear de pasajeros');
};

export const editarPasajero = (req, res) => {
  res.status(200).send('editar de pasajeros');
};

export const eliminarPasajero = (req, res) => {
  res.status(200).send('borrar de pasajeros');
};

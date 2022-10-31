// import servicio from '../services/avion_vuelo.service.js';

export const crearRelacionPasajeroCPasaje = async (_, res) => {
  res.status(200).send('endpoint creacion relacion pasajero compra pasaje');
};

export const verRelacionesPasajeroCPasaje = async (_, res) => {
  res.status(200).send('endpoint mostrar todas las relacion pasajero compra pasaje');
};

export const verRelacionPasajeroCPasaje = async (_, res) => {
  res.status(200).send('endpoint mostrar relacion pasajero compra pasaje');
};

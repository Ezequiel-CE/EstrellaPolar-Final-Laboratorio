import PasajeroCompraPasajeServico from '../services/pasajero_compra_pasaje.service.js';

export const crearRelacionPasajeroCPasaje = async (req, res) => {
  try {
    const response = await PasajeroCompraPasajeServico.postPasajeroCompraPasaje(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const verRelacionesPasajeroCPasaje = async (_, res) => {
  res.status(200).send('endpoint mostrar todas las relacion pasajero compra pasaje');
};

export const verRelacionPasajeroCPasaje = async (_, res) => {
  res.status(200).send('endpoint mostrar relacion pasajero compra pasaje');
};

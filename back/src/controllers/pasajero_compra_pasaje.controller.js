import PasajeroCompraPasajeServico from '../services/pasajero_compra_pasaje.service.js';

export const crearRelacionPasajeroCPasaje = async (req, res) => {
  try {
    const response = await PasajeroCompraPasajeServico.postPasajeroCompraPasaje(req.body);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

export const verRelacionesPasajeroCPasaje = async (_, res) => {
  try {
    const resp = await PasajeroCompraPasajeServico.getAllPasajeroCompraPasaje();
    res.status(200).json(resp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const verRelacionPasajeroCPasaje = async (req, res) => {
  const { id } = req.params;
  try {
    const pasajeComprado = await PasajeroCompraPasajeServico.getPasajeroCompraPasaje(id);
    res.status(200).json(pasajeComprado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

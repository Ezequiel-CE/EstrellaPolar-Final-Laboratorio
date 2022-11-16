import API from './api';

export const conseguirVuelos = async (param) => {
  const { data } = await API.get('itinerario/vuelos', {
    params: { origen: param.origen, destino: param.destino, fecha: param.fecha },
  });

  return data.resp;
};

export const getPasajes = async (data) => {
  const response = await API.post('/pasaje', data);
  const pasajes = response.data;
  return pasajes.resp;
};

export const getAsientos = async (data) => {
  const response = await API.post('avion/asientos', data);
  const asientos = response.data;
  return asientos.resp;
};

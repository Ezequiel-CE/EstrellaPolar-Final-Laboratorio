import API from './api';

export const conseguirVuelos = async () => {
  const { data } = await API.get('itinerario/vuelos');
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

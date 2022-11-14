import API from './api';

export const conseguirVuelos = async () => {
  const { data } = await API.get('itinerario/vuelos');
  return data.resp;
};

export const conseguirtal = () => 0;

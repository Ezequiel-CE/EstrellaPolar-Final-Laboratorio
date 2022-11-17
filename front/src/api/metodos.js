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

export const getAsientos = async (param) => {
  const { data } = await API.get('avion/asientos', {
    params: { v: param.v, a: param.a, clase: param.clase },
  });

  return data.resp;
};

export const comprarPasaje = async (data) => {
  console.info(data);
  let path = 'pasajeros/comprar';
  let config = {};

  if (data.token) {
    path = 'pasajeros/comprar/cuenta';
    config = {
      headers: { Authorization: `Bearer ${data.token}` },
    };
  }

  const response = await API.post(path, data, config);
  const asientos = response.data;
  return asientos.resp;
};

export const logearse = async (data) => {
  const response = await API.post('auth/login', data);
  const info = response.data;
  return info.token;
};

export const registrarse = async (data) => {
  const response = await API.post('auth/register', data);
  const info = response.data;
  return info.token;
};

export const editarAsiento = async (asiento) => {
  const { data } = await API.patch('pasajeros/cambiar', asiento);
  return data.resp;
};

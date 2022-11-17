import { Grid, Typography, Button } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Persona from './conponent/persona';
import VueloCompra from './conponent/VueloCompra';
import ComoPaga from './conponent/ComoPaga';
import Datos from './conponent/datos';
import { useApiContext } from '../../context/state';

const schema = yup
  .object({
    nombre: yup.string().required().min(3),
    apellido: yup.string().required().min(3),
    numero: yup.number().positive().integer().required(),
    tipo: yup.string().required(),
    fecha: yup.date().required(),
    telefono: yup.number().positive().integer().required(),
    sexo: yup.string().required(),
    pais: yup.string().required().min(3),
    email: yup.string().email().required(),
    numeroT: yup.number().positive().integer().required(),
    codigoT: yup.number().positive().integer().required(),
    fechaT: yup.date().required(),
    numeroD: yup.number().positive().integer().required(),
    direccion: yup.string().required(),
  })
  .required();

function CompraPasaje({ mutation }) {
  const [checkbox, setCheckbox] = React.useState('credito');
  const { selectVuelo, state } = useApiContext();
  const { vuelo, auth } = state;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      nombre: '',
      apellido: '',
      numero: '',
      tipo: '',
      fecha: '',
      telefono: '',
      sexo: '',
      pais: '',
      direccion: '',
      email: '',
      numeroT: '',
      codigoT: '',
      fechaT: '',
      numeroD: '',
    },
    resolver: yupResolver(schema),
  });

  const handleChange = (event) => {
    setCheckbox(event.target.value);
  };

  const onClickComprar = (data) => {
    const { vuelo: vueloInfo, data: dataInfo } = data;

    const dataFormateada = {
      pasajero: {
        nombre: dataInfo.nombre,
        apellido: dataInfo.apellido,
        tipo_documento: dataInfo.tipo,
        num_documento: dataInfo.numero,
        fecha_nacimiento: dataInfo.fecha,
        telefono: dataInfo.telefono,
        direccion: dataInfo.direccion,
        email: dataInfo.email,
      },
      vuelo: vueloInfo.vuelo.id,
      avion: vueloInfo.vuelo.avions[0].id,
      clase: vueloInfo.pasajeEscogido.categoria,
      vuelo_pasaje: vueloInfo.pasajeEscogido.vuelo_pasaje.id,
      total: vueloInfo.pasajeEscogido.total,
      token: null,
    };

    if (auth) {
      dataFormateada.token = auth.token;
      mutation.mutate(dataFormateada);
    } else {
      mutation.mutate(dataFormateada);
    }
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        <Typography variant="h4" component="h4" textAlign="center" sx={{ mb: 4 }}>
          Quien viaja?
        </Typography>
        <Persona register={register} control={control} errors={errors} />
        <Typography variant="h4" component="h4" textAlign="center" sx={{ mt: 4, mb: 4 }}>
          Como Pagas?
        </Typography>
        <ComoPaga handleChange={handleChange} value={checkbox} />
        <Typography variant="h4" component="h4" textAlign="center" sx={{ mt: 4, mb: 4 }}>
          Datos de la Tarjeta
        </Typography>
        <Datos register={register} control={control} errors={errors} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4" component="h4" textAlign="center" sx={{ mb: 4 }}>
          Vuelo Escogido
        </Typography>
        <VueloCompra />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px' }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#F96D00',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={handleSubmit((data) => {
            onClickComprar({ vuelo, data });
          })}
        >
          <ShoppingCartIcon />
          Comprar
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#F96D00',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => {
            selectVuelo(null);
          }}
        >
          <CloseIcon />
          Cancelar compra
        </Button>
      </Grid>
    </Grid>
  );
}

export default CompraPasaje;

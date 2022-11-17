import React from 'react';

const TusPasajes = () => {
  const { data, isFetching, error } = useQuery(['pasaje', pasaje], () => getPasajes(pasaje), {
    enabled: pasaje != null,
  });

  return <div> tus pasajes</div>;
};

export default TusPasajes;

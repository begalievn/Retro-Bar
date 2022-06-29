import axios from 'axios';

const URL = 'http://discoverystudio.xyz:6969';

export const getPhotos = async () => {
  let result = await axios.get(`${URL}/photo`).then((res) => res.data);

  return result;
};

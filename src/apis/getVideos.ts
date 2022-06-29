import axios from 'axios';

const URL = 'http://discoverystudio.xyz:6969';

export const getVideos = async () => {
  let result = await axios.get(`${URL}/video`).then((res) => res.data);

  return result;
};

//import { API_BASE_PATH } from '~/apis';

export default async(search) => {
  // const URL = `${API_BASE_PATH}/posts`;
  console.info(' saga API search input value : ', search);
  const response = await fetch('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist='+search+'&api_key=81044b53926041ace83a0634eed4369b&format=json');
  return await response.json();
};

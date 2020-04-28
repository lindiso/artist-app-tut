import { API_BASE_PATH } from '~/apis';

export default async() => {
  const URL = `${API_BASE_PATH}/posts`;
  const response = await fetch(URL);
  return await response.json();
};

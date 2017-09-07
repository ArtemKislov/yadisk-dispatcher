import axios from './axios';

export const getDirContent = path => (
  axios().get(`/resources?path=${path}&preview_size=M`)
    .then(response => response.data)
    .catch(error => error)
);

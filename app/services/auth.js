import { store } from 'Redux';
import history from 'Services/history';
import { asyncGetDirRequest } from 'Redux/ducks/disk';

export function checkAuth(path) {
  const authURL = 'https://oauth.yandex.ru/authorize?response_type=token&client_id=accf0d1eb45c4367b6af8120767aa013';
  if (!localStorage.getItem('token')) {
    window.location.href = authURL;
    return;
  }
  store.dispatch(asyncGetDirRequest(path));
}

export function onAuthSuccess() {
  const token = /access_token=([^&]+)/.exec(document.location.hash)[1];
  localStorage.setItem('token', token);
  history.push('/');
}

import { all } from 'redux-saga/effects';
import yaDiskSaga from './yaDiskSaga';

export default function* rootSaga() {
  yield all([
    yaDiskSaga(),
  ]);
}

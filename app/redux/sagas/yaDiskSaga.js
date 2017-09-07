import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from 'Services/api';
import {
  GET_DIR_CONTENT_REQUEST,
  GET_DIR_CONTENT_REQUEST_SUCCESS,
  GET_DIR_CONTENT_REQUEST_ERROR,
} from '../ducks/disk';

function* getDirContent(action) {
  try {
    const content = yield call(Api.getDirContent, action.payload.path);
    yield put({ type: GET_DIR_CONTENT_REQUEST_SUCCESS, payload: { content } });
  } catch (e) {
    yield put({ type: GET_DIR_CONTENT_REQUEST_ERROR, message: e.message });
  }
}

function* yaDiskSaga() {
  yield takeEvery(GET_DIR_CONTENT_REQUEST, getDirContent);
}

export default yaDiskSaga;

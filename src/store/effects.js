import { put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';

function* fetchFactEffect(action) {
  try {
    const data = yield fetch(
      'https://uselessfacts.jsph.pl/random.json?language=en'
    ).then((res) => res.json());
    yield put(actions.fetchFactSuccessAction(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchEffects() {
  yield takeEvery(actions.FETCH_FACT, fetchFactEffect);
}

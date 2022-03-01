import { all, call, put, takeLatest, ForkEffect, AllEffect } from 'redux-saga/effects';
import {
    fetchROLEFailure,
    fetchROLESuccess
} from "../actions/roleActions";
import {roleTypes} from '../constants/actionTypes';
import {getROLEDetails} from "../services/roleApi";

function* fetchROLESaga({payload}: any): any {
    try {
        const response = yield call(getROLEDetails, payload);
        console.log(response);
        if (response.data) {                 
            yield put(
                fetchROLESuccess(
                    response.data
                )
            );
          } else {
            throw response;
          }
       
    } catch (e) {
        yield put(
            fetchROLEFailure({
                error: 'Unauthorized'
            })
        );
    }
}

function* roleSaga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
    yield all([takeLatest(roleTypes.FETCH_ROLE_REQUEST, fetchROLESaga)]);
}

export default roleSaga;
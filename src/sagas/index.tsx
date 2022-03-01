import { all, fork } from "redux-saga/effects";
import loginSaga from "./authSaga";
import roleSaga from "./roleSaga";
export default function* startForman(): Generator<never> {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        yield all([
                fork(loginSaga),
                fork(roleSaga),
        ]);
}

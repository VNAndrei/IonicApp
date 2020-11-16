import { AccountState } from "../infrastructure/states/AccountState";
import { AppState } from "../infrastructure/states/AppState";

const updateAccount = (state: AppState, payload: AccountState) => ({
    ...state,
    account: {
        ...state.account,
        ...payload,
    },
});
const logout = (state: AppState) => ({
    ...state,
    account: {},
});

export { updateAccount, logout };

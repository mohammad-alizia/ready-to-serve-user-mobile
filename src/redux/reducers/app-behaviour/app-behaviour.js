import { createSlice } from "@reduxjs/toolkit";
import { slicesName } from "../slicesNames";

const initialState = {
    first_access: false,
};

const appBehaviour = createSlice({
    name: slicesName.APP_BEHAVIOUR,
    initialState,
    reducers: {
        setFirstAccess: (state, payload) => {
            state.first_access = true
        }
    }
})


export const { setFirstAccess } = appBehaviour.actions;
const appBehaviourSlice = appBehaviour.reducer;
export default appBehaviourSlice
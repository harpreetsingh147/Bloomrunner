/* ngrx */
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as authActions from '../Store/Auth.Actions';
/* model */
import { Auth } from './Auth.State';


export interface AuthState extends EntityState<Auth> {
    showLoader: boolean,
}

export const adapter: EntityAdapter<Auth> = createEntityAdapter<Auth>({
    selectId: auth => auth.user.sub
})

export const initialState: AuthState = adapter.getInitialState({
    showLoader: false,
});

export const reducer = createReducer(
    initialState,
    on(authActions.LoginSuccess, (state, action) => {
        return { ...state, entities: action.userAndToken }
    }),
    on(authActions.RegisterProcessing, (state, action) => {
        return { ...state, showLoader: true }
    }),
    on(authActions.RegisterSuccess, (state, action) => {
        return { ...state, showLoader: false }
    })
)

export const { selectEntities } = adapter.getSelectors();
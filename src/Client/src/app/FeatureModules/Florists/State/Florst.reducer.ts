/* ngrx store */
import { createReducer, on } from "@ngrx/store";

/* actions */
import * as floristActions from './Florist.actions';

/* entities */
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';

/* state */
import { Florist } from './florist.state';


/* extend entity state with our custom properties */
export interface FloristState extends EntityState<Florist> {
    isLoaded?: boolean;
    error?: string;
    isLoading: boolean;
}

/* adaptor instance will return utility methods for our floristState like addOne,updateOne */
export const adapter: EntityAdapter<Florist> = createEntityAdapter<Florist>({
    selectId: entity => entity.studentId,
    sortComparer: (l: Florist, r: Florist) => l.studentId.toString().localeCompare(r.studentId.toString())
})

/* initialize default state for our florist */
export const initialState: FloristState = adapter.getInitialState({
    isLoaded: false,
    isLoading: false,
    error: null,
});

/* configure adaptor methods */
export const reducer = createReducer(
    initialState,
    on(floristActions.ShowLoader, (state, action) => {
        return { ...state, isLoaded: true, isLoading: true }
    }),
    on(floristActions.FloristLoadRequest, (state, action) => {
        return { ...state, isLoaded: false }
    }),
    on(floristActions.floristsLoadedSuccess, (state, action) => {
        return adapter.addAll(action.florists, { ...state, isLoaded: true, isLoading: false })
    }),
    on(floristActions.floristsLoadedFailed, (state, action) => {
        return { ...state, isLoaded: false, isLoading: false, error: action.error }
    }),
    on(floristActions.FloristPostSuccess, (state, action) => {
        return adapter.addOne(action.florist, { ...state, isLoaded: true, isLoading: false })
    }),
    on(floristActions.FloristPostFailed, (state, action) => {
        return { ...state, isLoaded: false, isLoading: false, error: action.error }
    }),
    on(floristActions.FloristDeleteSuccess, (state, action) => {
        return adapter.removeOne(action.floristId, { ...state, isLoaded: true, isLoading: false })
    }),
    on(floristActions.FloristDeleteFailed, (state, action) => {
        return { ...state, isLoaded: false, isLoading: false, error: action.error }
    }),
    on(floristActions.FloristUpdateSuccess, (state, action) => {
        const update: Update<Florist> = {
            id: action.payload.studentId,
            changes: {
                ...action.payload,
            }
        };
        return adapter.updateOne(update, { ...state, isLoaded: true, isLoading: false })
    }),
    on(floristActions.FloristUpdateFailed, (state, action) => {
        return { ...state, isLoaded: false, isLoading: false, error: action.error?.message }
    })
);

export const { selectAll, selectIds } = adapter.getSelectors();
/* ngrx core moduels */
import { FloristState, selectAll } from './Florst.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';


/* select florist store */
export const courseFeatureSelector = createFeatureSelector<FloristState>('florists');

// select florist from stror
export const florists = createSelector(
  courseFeatureSelector,
  selectAll
)

// flag to check if florist data has recieved in store
export const areFloristsLoaded = createSelector(
  courseFeatureSelector,
  (state) => state.isLoaded
)

//flag to check if curd operation is completed
export const isLoading = createSelector(
  courseFeatureSelector,
  (state) => state.isLoading
)

//get error message from store in case any crud operation failed
export const showError = createSelector(
  courseFeatureSelector,
  (state) => state.error
)
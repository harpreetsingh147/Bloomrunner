/* ngrx core modules */
import { createAction, props } from '@ngrx/store';

/* ngrx entity */
import { Update } from '@ngrx/entity';

/* models */
import { Florist } from '../Models/Florist';

export const FloristLoadRequest = createAction("[Florist List] Florist GET Service Request");
export const floristsLoadedSuccess = createAction("[Florist List Component] Courses loaded success", props<{ florists: Florist[] }>());
export const floristsLoadedFailed = createAction("[Florist List Component] Courses loaded Failed", props<{ error: any }>());


export const FloristPostRequest = createAction("[Florist Effect] Florist POST Api Request", props<{ florist: Florist }>());
export const FloristPostSuccess = createAction("[Florist List Component] Florist Post Success", props<{ florist: Florist }>());
export const FloristPostFailed = createAction("[Florist List Component] Florist Post Failed", props<{ error: any }>());


export const FloristDeleteRequest = createAction("[Florist List Components] Florist Delete Api Request", props<{ floristId: number }>());
export const FloristDeleteSuccess = createAction("[Florist List Components] Delete Florist Success", props<{ floristId: number }>());
export const FloristDeleteFailed = createAction("[Florist List Components] Delete Florist Failed", props<{ error: any }>());

export const FloristUpdateRequest = createAction("[Florist List Component] Florist Update Api Request", props<{ update: Update<Florist> }>());
export const FloristUpdateSuccess = createAction("[Florist List Component] Update Florist Success", props<{ payload: Florist }>());
export const FloristUpdateFailed = createAction("[Florist List Component] Update Florist Failed", props<{ error: any }>());


export const ShowLoader = createAction('[Utility] Show Loader');

export const courseActionTypes = {
    FloristLoadRequest, floristsLoadedSuccess, floristsLoadedFailed,
    FloristPostRequest, FloristPostSuccess, FloristPostFailed,
    FloristDeleteRequest, FloristDeleteSuccess, FloristDeleteFailed,
    FloristUpdateRequest, FloristUpdateSuccess, FloristUpdateFailed
} 
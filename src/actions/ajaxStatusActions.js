import * as types from './actionTypes/actionTypes';

export function beginAjaxCall() {
    return {type: types.BEGIN_AJAX_CALL};
}
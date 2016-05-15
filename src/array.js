/**
 * Array utilities
 */

import Str from './string';

export default {
    has(arr, val, caseSensitive) {
        let sCase = Boolean(caseSensitive);
        for (var i = 0, l = arr.length; i < l; i++) {
            if (Str.matchCase(arr[i].toString(), sCase) === val) {
                return true;
            }
        }
        return false;
    }
};

import { writable } from 'svelte/store';

export const postData = writable([
    {
        "title": "name1",
        "gridProp": 2,
    },
    {
        "title":"name2",
        "gridProp": 1,
    },
    {
        "title": "name1",
        "gridProp": 1,
    },
    {
        "title":"name2",
        "gridProp": 1,
    },
    {
        "title": "name1",
        "gridProp": 1,
    },
    {
        "title":"name2",
        "gridProp": 1,
    }
]);


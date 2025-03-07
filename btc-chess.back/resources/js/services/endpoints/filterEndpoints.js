import {api} from '../api.js';

export const filterEndpoints = api.injectEndpoints({
    endpoints: (builder) => ({
        getFilter: builder.query({
            query: (searchParams) => ({ url: `/filter-products?${searchParams}`}),
        }),
    }),
    overrideExisting: false,
});

export const {useGetFilterQuery } = filterEndpoints;

import {api} from '../api';
import {IProduct, PaginationResponse} from "@/types";
// import {
//     IActivateResponse,
// } from '@/types';
// import {SignInFormValues} from "@/app/(tabs)/sign_in";
// import {SignUpFormValues, SignUpValues} from "@/app/(tabs)/sign_up";
// import {ForgotPasswordValues} from "@/app/(tabs)/forgot_password";
// import {BaseNextRequest} from "next/dist/server/base-http";
// import {ActivateFormValues} from "@/app/(tabs)/activate";
//
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
//
// export interface ResetPasswordValues {
//     password: string;
//     re_password: string;
//     changePasswordHash: string;
//     email: string;
// }

export const authEndpoints = api.injectEndpoints({
    endpoints: (builder) => ({
        getFilter: builder.query<PaginationResponse<IProduct>, string>({
            query: (searchParams) => ({ url: `/filter-products?${searchParams}`}),
        }),
    }),
    overrideExisting: false,
});

export const {useGetFilterQuery } = authEndpoints;

import axios, { AxiosRequestConfig } from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/query';



const axiosBaseQuery =
    ({
         baseUrl,
         prepareHeaders,
     }: {
        baseUrl?: string;
        prepareHeaders?: (headers: Headers, context: { getState: any }) => Promise<Headers>;
    }): BaseQueryFn<
        {
            url: string;
            method: AxiosRequestConfig['method'];
            data?: AxiosRequestConfig['data'];
            params?: AxiosRequestConfig['params'];
        },
        unknown,
        unknown
    > =>
        async ({ url, method, data, params }, api) => {
            try {
                const headers = new Headers();

                if (prepareHeaders) {
                    await prepareHeaders(headers, { getState: api.getState });
                }

                const headersObject: Record<string, string> = {};
                headers.forEach((value: any, key: any) => {
                    headersObject[key] = value;
                });

                const result = await axios({
                    url: baseUrl + url,
                    method,
                    data,
                    params,
                    headers: headersObject,
                });

                return { data: result.data };
            } catch (axiosError) {
                const err = axiosError as any;
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                };
            }
        };

export default axiosBaseQuery;

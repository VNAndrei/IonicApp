import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import dayjs from "dayjs";
import qs from "qs";
import { Error } from "../domain/models/Error";

export default class Api {
    [x: string]: any;

    public constructor(config?: AxiosRequestConfig) {
        this.api = axios.create(config);
        this.api.interceptors.request.use((param: AxiosRequestConfig) => ({
            baseUrl: process.env.API_BASE_URL,
            paramsSerializer: (param: any) =>
                qs.stringify(param, {
                    serializeDate: (date: Date) =>
                        dayjs(date).format("YYYY-MM-DDTHH:mm:ssZ"),
                }),
            ...param,
        }));

        this.getUri = this.getUri.bind(this);
        this.request = this.request.bind(this);
        this.get = this.get.bind(this);
        this.delete = this.delete.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);
    }

    public getUri(config?: AxiosRequestConfig): string {
        return this.api.getUri(config);
    }
    public request<T, R = AxiosResponse<T>>(
        config: AxiosRequestConfig
    ): Promise<R> {
        return this.api.request(config);
    }

    public get<T, R = AxiosResponse<T>>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.api.get(url, config);
    }

    public post<T, B, R = AxiosResponse<T>>(
        url: string,
        data?: B,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.api.post(url, data, config);
    }

    public put<T, B, R = AxiosResponse<T>>(
        url: string,
        data?: B,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.api.put(url, data, config);
    }

    public delete<T, R = AxiosResponse<T>>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.api.delete(url, config);
    }
    public succes<T>(response: AxiosResponse<T>) {
        return response.data;
    }
    public error(error: AxiosError<Error>): Error {
        return { message: error.message, isAxiosError: true };
    }
}

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default class Api {
    [x: string]: any;

    public constructor(config?: AxiosRequestConfig) {
        this.api = axios.create(config);

        this.api.interceptors.request.use((config: AxiosRequestConfig) => {
            const token = this.getCurrentUserToken();
            config.headers.Authorization = token ? `Bearer ${token}` : "";
            return config;
        });

        this.api.interceptors.response.use(({ data }: AxiosResponse) => data);

        this.getUri = this.getUri.bind(this);
        this.request = this.request.bind(this);
        this.get = this.get.bind(this);
        this.delete = this.delete.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);
    }

    private getCurrentUserToken() {
        const currentUser = localStorage.getItem("__STATE_MACHINE__");
        return currentUser === null
            ? ""
            : JSON.parse(currentUser).account.token;
    }

    protected getUri(config?: AxiosRequestConfig): string {
        return this.api.getUri(config);
    }

    protected request<T>(config: AxiosRequestConfig): Promise<T> {
        return this.api.request(config);
    }

    protected get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.api.get(url, config);
    }

    protected post<T, B>(
        url: string,
        data?: B,
        config?: AxiosRequestConfig
    ): Promise<T> {
        return this.api.post(url, data, config);
    }

    protected put<T, B>(
        url: string,
        data?: B,
        config?: AxiosRequestConfig
    ): Promise<T> {
        return this.api.put(url, data, config);
    }

    protected delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.api.delete(url, config);
    }
}

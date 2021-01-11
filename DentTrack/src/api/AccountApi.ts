import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { Credentials } from "../domain/models/Credentials";
import { User } from "../domain/models/User";
import Api from "./Api";
import { Error } from "../domain/models/Error";
import { Technician } from "../domain/models/Technician";
import { apiConfig } from "../config/api.config";

export class AccountApi extends Api {
    public constructor(config?: AxiosRequestConfig) {
        super(config);
        this.api.interceptors.request.use((param: AxiosRequestConfig) => ({
            ...param,
        }));

        this.api.interceptors.response.use((param: AxiosResponse) => ({
            ...param,
        }));

        this.login = this.login.bind(this);
        this.getTechnicians = this.getTechnicians.bind(this);
    }

    public login(credentials: Credentials): Promise<User> {
        return this.post<User, Credentials>(
            "/accounts/authenticate",
            credentials
        );
    }
    public getTechnicians(): Promise<Technician[]> {
        return this.get<Technician[]>("/accounts/technicians");
    }
}

export const accountApi = new AccountApi(apiConfig);

import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { Credentials } from "../domain/models/Credentials";
import { User } from "../domain/models/User";
import Api from "./Api";
import { Error } from "../domain/models/Error";
import { Technician } from "../domain/models/Technician";

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

    public login(credentials: Credentials): Promise<User | Error> {
        return this.post<User, Credentials, AxiosResponse<User>>(
            "/accounts/authenticate",
            credentials
        )
            .then(this.succes)
            .catch(this.error);
    }
    public getTechnicians(): Promise<Technician[] | Error> {
        return this.get<Technician[], AxiosResponse<Technician[]>>(
            "/accounts/technicians"
        )
            .then(this.succes)
            .catch(this.error);
    }
}

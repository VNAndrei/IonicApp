import { AxiosRequestConfig, AxiosResponse } from "axios";
import Api from "./Api";
import { apiConfig } from "../config/api.config";
import { Treatment } from "../domain/models/Treatment";
import { Pagination } from "../domain/models/Pagination";

export class TreatmentApi extends Api {
    public constructor(config?: AxiosRequestConfig) {
        super(config);
        this.api.interceptors.request.use((param: AxiosRequestConfig) => ({
            ...param,
        }));

        this.api.interceptors.response.use((param: AxiosResponse) => ({
            ...param,
        }));
        this.getTreatments = this.getTreatments.bind(this);
    }

    public getTreatments(
        userId: number,
        pagination?: Pagination
    ): Promise<Treatment[]> {
        const filter =
            pagination === undefined
                ? ""
                : `?page=${pagination.page}&pageSize=${pagination.pageSize}`;
        return this.get<Treatment[]>(`/accounts/${userId}/treatments${filter}`);
    }
}

export const treatmentApi = new TreatmentApi(apiConfig);

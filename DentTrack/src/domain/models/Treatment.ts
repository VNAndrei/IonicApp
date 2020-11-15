import { Account } from "./Account";
import { Status } from "../enums/Status";
import { BaseTreatment } from "./BaseTreatment";

export type Treatment = {
    id: number;
    patientName: string;
    stepDeadline: Date;
    step: string | null;
    log: string;
    medic: Account;
    technician: Account;
    description: string;
    stepStatus: Status;
    baseTreatment: BaseTreatment;
};

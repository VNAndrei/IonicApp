import { Role } from "../../domain/enums/Role";

export interface AccountState {
    role?: Role;
    id?: number;
    displayName?: string;
    token?: string;
}

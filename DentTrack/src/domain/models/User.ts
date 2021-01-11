import { Role } from "../enums/Role";

export type User = {
    id: number;
    displayName: string;
    role: Role;
    token: string;
};

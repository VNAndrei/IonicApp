import { Role } from "../enums/Role";
import { type } from "os";

export type User = {
    id: number;
    displayName: string;
    role: Role;
    token: string;
};

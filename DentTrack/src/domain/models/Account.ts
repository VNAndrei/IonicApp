import { Role } from "../enums/Role";
import { type } from "os";

export type Account = {
    id: number;
    username: string;
    phoneNumber: string;
    email: string;
    displayName: string;
    role: Role;
};

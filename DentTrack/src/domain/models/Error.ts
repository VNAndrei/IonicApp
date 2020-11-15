export type Error = {
    message: string;
    isAxiosError: boolean;
};

export const isError = (object: any): object is Error => {
    return object.isAxiosError !== undefined;
};

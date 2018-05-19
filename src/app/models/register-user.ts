export interface RegisterUserSchema {
    name: string;
    email: string;
    password?: string;
    isAdmin?: boolean;
}

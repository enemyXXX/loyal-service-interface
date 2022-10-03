export enum Role {
    admin = 'admin',
    user = 'user'
}

export type UserRole = Role.admin | Role.user | null;

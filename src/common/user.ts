export enum Role {
    admin = 'admin',
    barber = 'barber',
    user = 'user'
}

export type UserRole = Role.admin | Role.user | Role.barber | null;

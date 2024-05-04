export enum Role {
    admin = 'admin',
    barber = 'barber',
    user = 'user',
    manager = 'manager',
}

export type UserRole = Role.admin | Role.user | Role.barber | Role.manager | null;

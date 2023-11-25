class LoginResponse {
    rolId: number;
    email: string;
    userId: number;
    rolName: string;
    firstName: string;
    lastName: string;

    constructor(rolId: number, email: string, userId: number, rolName: string, firstName: string, lastName: string) {
        this.rolId = rolId;
        this.email = email;
        this.userId = userId;
        this.rolName = rolName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
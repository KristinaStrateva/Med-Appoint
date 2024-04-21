import { Appointment } from "./Appointment";

export class Patient {
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;
    appointments!: Appointment[];
}
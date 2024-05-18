import { Appointment } from "../models/Appointment";

export interface IDoctor {
    _id: string;
    name: string;
    medSpeciality: 'General Practice/GP' | 'Pediatrics' | 'Orthopedics' | 'Neurology' | 'Cardiology' | 'Dermatology';
    imageUrl: string;
    appointments: Record<string, string[]>;
    __v: number
}
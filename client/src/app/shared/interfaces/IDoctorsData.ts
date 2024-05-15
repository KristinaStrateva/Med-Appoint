import { IDoctor } from "./IDoctor";

export interface IDoctorsData {
    allDoctors: IDoctor[];
    medSpecialities: IDoctor[];
    patientsAmount: number;
  }
  
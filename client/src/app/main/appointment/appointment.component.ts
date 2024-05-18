import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { IDoctor } from 'src/app/shared/interfaces/IDoctor';
import generateDates from 'src/app/shared/utils/generateDate';
import generateHours from 'src/app/shared/utils/generateHours';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  specialties: string[] = [];
  allDoctors: IDoctor[] = [];
  allDates: string[] = [];
  allTimes: string[] = [];
  doctors: IDoctor[] = [];
  doctorId: string = '';
  dates: string[] = [];
  times: string[] = [];
  appointmentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private appService: AppService) { }

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      selectedSpecialty: ['', [Validators.required]],
      selectedDoctor: [{ value: '', disabled: true }, [Validators.required]],
      selectedDate: [{ value: '', disabled: true }, [Validators.required]],
      selectedTime: [{ value: '', disabled: true }, [Validators.required]],
      description: ['']
    });

    this.appService.getDoctors().subscribe(({ allDoctors, medSpecialities }) => {
      this.allDoctors = allDoctors;

      for (const specialty of medSpecialities) {
        this.specialties.push(specialty.medSpeciality);
      }
    });

    this.allDates = generateDates();
    this.allTimes = generateHours;
  }

  loadDoctorsBySpecialty(event: Event): void {
    this.appointmentForm.controls['selectedDoctor'].reset();
    this.appointmentForm.controls['selectedDate'].reset();
    this.appointmentForm.controls['selectedTime'].reset();

    const specialty: string = (event.target as HTMLSelectElement).value;

    this.doctors = this.allDoctors.filter(doctor => doctor.medSpeciality === specialty);

    this.appointmentForm.controls['selectedDoctor'].enable();
  }

  loadDatesByDoctor(event: Event): void {
    this.appointmentForm.controls['selectedDate'].reset();
    this.appointmentForm.controls['selectedTime'].reset();

    const currDoctorId: string = (event.target as HTMLSelectElement).value;
    this.doctorId = currDoctorId;

    const docAppointments = this.allDoctors.find(doctor => doctor._id === currDoctorId)?.appointments;

    for (const date in docAppointments) {
      if (!this.allDates.includes(date) || (this.allDates.includes(date) && docAppointments[date].length <= 8)) {
        this.dates.push(date);
      }
    }

    if (this.dates.length === 0) {
      this.dates = this.allDates;
    }

    this.appointmentForm.controls['selectedDate'].enable();
  }

  loadTimesByDate(event: Event): void {
    this.appointmentForm.controls['selectedTime'].reset();

    const date = (event.target as HTMLSelectElement).value;

    const hoursForThatDate = this.allDoctors.find(doctor => doctor._id === this.doctorId)?.appointments[date];

    if (hoursForThatDate?.length === 0) {
      this.times = this.allTimes;
      return;
    }

    this.times = this.allTimes.filter(hour => !hoursForThatDate?.includes(hour))

    this.appointmentForm.controls['selectedTime'].enable();
  }

  onSubmit(): void {
    // Тук може да добавите логиката си за изпращане на формата
    console.log(this.appointmentForm.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { IDoctor } from 'src/app/shared/interfaces/IDoctor';
import generateDates from 'src/app/shared/utils/generateDate';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  specialties: string[] = [];
  allDoctors: IDoctor[] = [];
  allDates: string[] = [];
  doctors: IDoctor[] = [];
  dates: string[] = [];
  times: string[] = [];
  appointmentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private appService: AppService) {}

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      selectedSpecialty: ['', [Validators.required]],
      selectedDoctor: [{value: '', disabled: true}, [Validators.required]],
      selectedDate: [{value: '', disabled: true}, [Validators.required]],
      selectedTime: [{value: '', disabled: true}, [Validators.required]],
      description: ['']
    });

    this.appService.getDoctors().subscribe(({allDoctors, medSpecialities}) => {
      this.allDoctors = allDoctors;

      for (const specialty of medSpecialities) {
        this.specialties.push(specialty.medSpeciality);
      }
    });

    this.allDates = generateDates();
  }
  
  loadDoctorsBySpecialty(event: Event): void {
    const specialty: string = (event.target as HTMLSelectElement).value;
    
    this.doctors = this.allDoctors.filter(doctor => doctor.medSpeciality === specialty);

    this.appointmentForm.controls['selectedDoctor'].enable();
  }

  loadDatesByDoctor(event: Event): void {
    const doctorId: string = (event.target as HTMLSelectElement).value;

    //Have to get all available dates for the selected doctor
    this.dates = this.allDoctors.find(doctor => doctor._id === doctorId)?.appointments.filter(appointment => !this.allDates.includes(appointment.date)).map(appointment => appointment.date)!;

    if (this.dates.length === 0) {
      this.dates = this.allDates;
    }

    this.appointmentForm.controls['selectedDate'].enable();
  }

  loadTimesByDate(event: Event): void {
    const date = (event.target as HTMLSelectElement).value;

    //Have to get all available hours for the selected date

    this.appointmentForm.controls['selectedTime'].enable();
  }

  onSubmit(): void {
    // Тук може да добавите логиката си за изпращане на формата
    console.log(this.appointmentForm.value);
  }
}

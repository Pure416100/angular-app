import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
   imports: [CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  user = {
    name: 'John Doe',
    email: 'john@example.com'
  };

  editUser() {
    alert('Edit User');
  }

aa = [
  {
    vehicleNo: 'กข-1234',
    brand: 'Toyota Hilux',
    status: 'พร้อมใช้งาน'
  },
  {
    vehicleNo: 'กข-5678',
    brand: 'Isuzu D-Max',
    status: 'ซ่อมบำรุง'
  },
    {
    vehicleNo: 'กข-5678',
    brand: 'Isuzu D-Max',
    status: 'รอตรวจสอบ'
  },
    {
    vehicleNo: 'กข-5678',
    brand: 'Isuzu D-Max',
    status: 'รอตรวจสอบ'
  },
    {
    vehicleNo: 'กข-5678',
    brand: 'Isuzu D-Max',
    status: 'ซ่อมบำรุง'
  },
    {
    vehicleNo: 'กข-5678',
    brand: 'Isuzu D-Max',
    status: 'ซ่อมบำรุง'
  }
];

}

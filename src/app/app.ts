import { Component, signal, inject } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive
} from '@angular/router';
import { VehicleService } from './services/todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private vehicleService = inject(VehicleService);

  protected readonly title = signal('ระบบรับรองภาหนะ');

  isSidebarCollapsed = false;

  aa: any[] = []; // ✅ ต้องมี

  constructor() {
    this.loadVehicles(); // ✅ เรียก API ตอนเปิดหน้า
  }

  toggleSidebar() {
    console.log('toggle');
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  loadVehicles() {
  this.vehicleService.getVehicles().subscribe({
    next: (res: any) => {
      this.aa = res.data;   // 👈 สำคัญ
      console.log(res);
    },
    error: (err) => {
      console.error(err);
    }
  });
  }
}
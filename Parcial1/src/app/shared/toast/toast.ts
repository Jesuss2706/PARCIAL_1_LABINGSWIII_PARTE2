import { Component, inject } from '@angular/core';
import { NotificacionService } from '../services/notificacion.service';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class Toast {
  protected notificacionService = inject(NotificacionService);
}

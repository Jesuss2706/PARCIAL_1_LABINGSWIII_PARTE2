import { Injectable, signal } from '@angular/core';

export type TipoNotificacion = 'exito' | 'error';

export interface Notificacion {
  id: number;
  mensaje: string;
  tipo: TipoNotificacion;
}

@Injectable({ providedIn: 'root' })
export class NotificacionService {
  private contador = 0;
  readonly notificaciones = signal<Notificacion[]>([]);

  mostrar(mensaje: string, tipo: TipoNotificacion = 'exito', duracionMs = 3000): void {
    const id = ++this.contador;
    this.notificaciones.update((lista) => [...lista, { id, mensaje, tipo }]);
    setTimeout(() => this.cerrar(id), duracionMs);
  }

  cerrar(id: number): void {
    this.notificaciones.update((lista) => lista.filter((n) => n.id !== id));
  }
}


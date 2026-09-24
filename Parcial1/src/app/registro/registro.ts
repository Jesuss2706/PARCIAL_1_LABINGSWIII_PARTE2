import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificacionService } from '../shared/services/notificacion.service';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  private fb = inject(FormBuilder);
  private notificacionService = inject(NotificacionService);

  protected readonly formulario = this.fb.nonNullable.group({
    nombres: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    tipoDocumento: ['', [Validators.required]],
    terminos: [false, [Validators.requiredTrue]],
  });

  protected get f() {
    return this.formulario.controls;
  }

  protected registrar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const { nombres, correo } = this.formulario.getRawValue();

    this.notificacionService.mostrar(`¡Registro exitoso! Enviamos un código de confirmación a ${correo}`);
    this.notificacionService.mostrar(`✅ ¡Bienvenido/a, ${nombres}! Revisa tu correo para confirmar tu registro.`);

    this.formulario.reset({ terminos: false });
  }
}

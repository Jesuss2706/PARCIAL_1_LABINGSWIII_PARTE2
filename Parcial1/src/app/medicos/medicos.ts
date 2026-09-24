import { Component, inject, signal } from '@angular/core';
import { NotificacionService } from '../shared/services/notificacion.service';

interface Especialidad {
  nombre: string;
  descripcion: string;
}

interface Medico {
  nombres: string;
  apellidos: string;
  especialidad: string;
  frase: string;
  imagen: string;
}

@Component({
  selector: 'app-medicos',
  imports: [],
  templateUrl: './medicos.html',
  styleUrl: './medicos.css',
})
export class Medicos {
  private notificacionService = inject(NotificacionService);

  protected readonly especialidades: Record<string, Especialidad> = {
    terapiaNeural: {
      nombre: 'Terapia Neural',
      descripcion:
        'La Terapia Neural regula el sistema nervioso mediante anestésicos locales, aliviando dolores crónicos y mejorando la función neurológica.',
    },
    quiropraxia: {
      nombre: 'Quiropraxia',
      descripcion:
        'La Quiropraxia se enfoca en el diagnóstico y tratamiento manual de trastornos del sistema neuro-músculo-esquelético, en especial de la columna vertebral.',
    },
    fisioterapia: {
      nombre: 'Fisioterapia',
      descripcion:
        'La Fisioterapia utiliza técnicas físicas y ejercicios terapéuticos para recuperar la movilidad, aliviar el dolor y prevenir lesiones.',
    },
    nutricion: {
      nombre: 'Nutrición y Dietética',
      descripcion:
        'La Nutrición y Dietética Terapéutica diseña planes alimenticios personalizados para tratar y prevenir enfermedades, mejorando la calidad de vida.',
    },
    cardiologia: {
      nombre: 'Cardiología',
      descripcion:
        'La Cardiología se encarga de la prevención, el diagnóstico y el tratamiento de las enfermedades del corazón y del sistema circulatorio.',
    },
    pediatria: {
      nombre: 'Pediatría',
      descripcion:
        'La Pediatría brinda atención médica integral a bebés, niños y adolescentes, favoreciendo su crecimiento y desarrollo saludable.',
    },
  };

  protected readonly claveEspecialidades = Object.keys(this.especialidades);
  protected readonly especialidadSeleccionada = signal<string>('terapiaNeural');

  protected readonly medicos: Medico[] = [
    { nombres: 'Juan', apellidos: 'Pérez', especialidad: 'Fisioterapia Deportiva', frase: 'Comprometido con tu recuperación.', imagen: 'https://picsum.photos/id/64/300/220' },
    { nombres: 'Catalina', apellidos: 'Sánchez', especialidad: 'Quiropraxia', frase: 'La salud es fundamental.', imagen: 'https://picsum.photos/id/65/300/220' },
    { nombres: 'Andrés', apellidos: 'Cardozo', especialidad: 'Nutrición y Dietética Terapéutica', frase: 'Un alimento sano alarga la vida.', imagen: 'https://picsum.photos/id/91/300/220' },
    { nombres: 'Laura', apellidos: 'Gómez', especialidad: 'Terapia Neural', frase: 'Cada avance cuenta en tu bienestar.', imagen: 'https://picsum.photos/id/177/300/220' },
    { nombres: 'Carlos', apellidos: 'Ramírez', especialidad: 'Cardiología', frase: 'Cuidamos tu corazón en cada consulta.', imagen: 'https://picsum.photos/id/203/300/220' },
    { nombres: 'Valentina', apellidos: 'Ortiz', especialidad: 'Pediatría', frase: 'Creciendo sanos, paso a paso.', imagen: 'https://picsum.photos/id/338/300/220' },
    { nombres: 'Miguel', apellidos: 'Torres', especialidad: 'Fisioterapia', frase: 'Movimiento sin dolor, esa es la meta.', imagen: 'https://picsum.photos/id/342/300/220' },
    { nombres: 'Sofía', apellidos: 'Londoño', especialidad: 'Quiropraxia', frase: 'Alineando tu bienestar desde la raíz.', imagen: 'https://picsum.photos/id/365/300/220' },
  ];

  protected seleccionarEspecialidad(clave: string): void {
    this.especialidadSeleccionada.set(clave);
  }

  protected agendarCita(medico: Medico): void {
    this.notificacionService.mostrar(
      `Baja al formulario de registro para agendar con ${medico.nombres} ${medico.apellidos}`
    );
  }
}

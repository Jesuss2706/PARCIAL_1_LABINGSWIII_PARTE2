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
    { nombres: 'Juan', apellidos: 'Pérez', especialidad: 'Fisioterapia Deportiva', frase: 'Comprometido con tu recuperación.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUV34qHI1VzjhQ95-jcbLTDLf4cnhxbCZXKyym9VABs6qUQLKocWWUDLI&s=10' },
    { nombres: 'Catalina', apellidos: 'Sánchez', especialidad: 'Quiropraxia', frase: 'La salud es fundamental.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKVt58disBcktgc6oa2MXIXgumHidJ_NkLfdFZbOPCiRxUOW950CjGpo&s=10' },
    { nombres: 'Andrés', apellidos: 'Cardozo', especialidad: 'Nutrición y Dietética Terapéutica', frase: 'Un alimento sano alarga la vida.', imagen: 'https://www.semana.com/resizer/v2/DS4BQDIPCBDIXGC2TI3IATVDRQ.PNG?auth=bb009a1b189e7e241c0d9bf08c9a027adca65322b7cab802ef0fabf9a0344603&smart=true&quality=75&width=1920' },
    { nombres: 'Laura', apellidos: 'Gómez', especialidad: 'Terapia Neural', frase: 'Cada avance cuenta en tu bienestar.', imagen: 'https://hips.hearstapps.com/hmg-prod/images/f-elconfidencial-com-original-e8d-cdd-e1a-e8dcdde1ad0b59abf5397921858235dd-1640206393.jpg?crop=0.564xw:1.00xh;0.299xw,0&resize=1200:*' },
    { nombres: 'Carlos', apellidos: 'Ramírez', especialidad: 'Cardiología', frase: 'Cuidamos tu corazón en cada consulta.', imagen: 'https://static.wikia.nocookie.net/dr-house/images/b/bc/House.jpg/revision/latest?cb=20090927231310&path-prefix=es' },
    { nombres: 'Valentina', apellidos: 'Ortiz', especialidad: 'Pediatría', frase: 'Creciendo sanos, paso a paso.', imagen: 'https://static.guiainfantil.com/media/51260/c/que-debemos-considerar-a-la-hora-de-elegir-pediatra-lg.jpg' },
    { nombres: 'Miguel', apellidos: 'Torres', especialidad: 'Fisioterapia', frase: 'Movimiento sin dolor, esa es la meta.', imagen: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/the-good-doctor-serie-telecinco-actor-freddie-highmore/138140869-1-esl-ES/Por-que-debes-ver-The-Good-Doctor-en-Telecinco.jpg?crop=0.666015625xw:1xh;center,top&resize=1200:*' },
    { nombres: 'Sofía', apellidos: 'Londoño', especialidad: 'Quiropraxia', frase: 'Alineando tu bienestar desde la raíz.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTYPx0trxnw5viyxi0s3woNS4S1SUAWpD-_HvcU9kqvOunH82jlGmu3kq&s=10' },
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

import { Component, OnInit } from '@angular/core';
import { Ilustracion } from './ilustracion';
import { GaleriaService } from './galeria.service';
import { AuthService } from '../usuarios/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit{

  ilustraciones: Ilustracion[];

  constructor(private galeriaService: GaleriaService, public authService: AuthService){}

  ngOnInit(): void {

    this.obtenerIlustraciones();
    
  }

  obtenerIlustraciones(): void {
    this.galeriaService.getIlustraciones().subscribe(
      (ilustraciones: Ilustracion[]) => {
        this.ilustraciones = ilustraciones;
      },
      error => {
        console.error('Error al obtener ilustraciones:', error);
      }
    );
  }

  eliminarIlustracion(ilustracion: Ilustracion) : void {
    swal({
      title: "Estás seguro?",
      text: `¿Desea borrar la ilustración ${ilustracion.titulo} ?`,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminalo!"
    }).then((result) => {
      if (result.value) {

        this.galeriaService.eliminarIlustracion(ilustracion.id).subscribe(
          response => {
            this.ilustraciones = this.ilustraciones.filter(ilu => ilu !== ilustracion);
            swal(
              'Ilustración Eliminada!',
              `Ilustración ${ilustracion.titulo} eliminada con éxito`,
              'success');
            });
          }
    });
  }
  

}

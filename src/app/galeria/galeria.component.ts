import { Component, OnInit } from '@angular/core';
import { Ilustracion } from './ilustracion';
import { GaleriaService } from './galeria.service';
import { AuthService } from '../usuarios/auth.service';

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

  

}

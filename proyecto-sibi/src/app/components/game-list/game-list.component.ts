import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { videojuego } from 'src/app/models/videojuego';
import { DbConnectorService } from 'src/app/services/db-connector.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  public displayedColumns: string[] = ['nombre', 'plataforma', 'lanzamiento', 'genero', 'empresa', 'puntuacionCritica', 'puntuacionUsuario', 'pegi'];
  public games = new MatTableDataSource<videojuego>([]);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private service: DbConnectorService) {}
  public getVideojuegos() {
    this.games.paginator = this.paginator;
    this.service.getVideojuegos().then((res) => {
      this.games = new MatTableDataSource<videojuego>(res);
      this.games.paginator = this.paginator;
    });
  }
  ngOnInit(): void {
    this.getVideojuegos();
  }
}

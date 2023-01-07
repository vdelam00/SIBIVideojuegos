import { Component, OnInit } from '@angular/core';
import { DbConnectorService } from 'src/app/services/db-connector.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public company: any[] = [];
  constructor(private service: DbConnectorService) {}
  ngOnInit(): void {
    this.service.getVideojuegos().then((res) => {
      this.company = res;
    });
  }
}

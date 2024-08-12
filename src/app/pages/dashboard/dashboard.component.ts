import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ReportsService } from 'src/app/services/reports.service';

export interface UserData {
  id: string;
  identification: string;
  name: string;
  email: string;
  progress: string;
  tags: string;
  state: string;
  entiti: string;
}
const STATE: string[] = [
  'Activo',
  'Descanso',
  'Ausente',
  'Accion'
 
];
const NAMES: string[] = [
  'Braian',
  'Giovanny',
  'Fabian',
  'Pepito',
  'Ruben'
];

const EMAILS: string[] = [
  'braian_manrique@hotmail.com',
  'Giovanny@hotmail.com',
  'Fabian@hotmail.com',
  
];

const ENTITIES: string[] = [
  'Policia',
  'Defensa civil',
  'Alcaldia Municipal',
  'Transito',
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'progress', 'fecha', 'reporte', 'tags', 'entiti','estado', 'detalle'];
  // dataSource: MatTableDataSource<any> ;
  dataSource = new MatTableDataSource<any>([]);



  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort ;
  
  constructor(private router : Router, private alertsService: ReportsService){
    // const users = Array.from({length: 10}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit():void{
   this.alertsService.loadAlerts().subscribe(
    (data: any) => {
      console.log(data,'epp')
      this.dataSource.data = data.alerts;  // Aquí se pasa la data al dataSource

    // this.dataSource = new MatTableDataSource(resp);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

   },(err) =>{
    console.log(err.error)
   } )
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  onShowDetail(id: string){
    
    this.router.navigateByUrl(`home/detalle/${id}`)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


function createNewUser(id: number): UserData {
  
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

    const email =  EMAILS[Math.round(Math.random() * (EMAILS.length - 1))] +
    ' ' +
    EMAILS[Math.round(Math.random() * (EMAILS.length - 1))].charAt(0) +
    '.';

    const entities = ENTITIES[Math.round(Math.random() * (ENTITIES.length - 1))] +
    ' ' +
    ENTITIES[Math.round(Math.random() * (ENTITIES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    identification: '1121904863',
    name: name,
    email: email,
    progress: Math.round(Math.random() * 10).toString(),
    state: 'Activo',
    tags: 'Tags',
    entiti : entities
  };
}

import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  constructor(private router: ActivatedRoute) {
    
  }
  @Input() value : any[] = [];

  events : any[] = [
    {content: 'Creado', dateEvent : '15/10/2025 10:30', status : 'F', comments: 'Vi a una persona tratando de ingresar a una vivienda'},
    {content: 'Reportado', dateEvent : '15/10/2025 10:31', status : 'F', comments: '......'},
    {content: 'Recibido', dateEvent : '15/10/2025 11:00', status : 'F' ,comments: 'Se envio alerta a la entidad'},
    {content: 'Procesando', dateEvent : '15/10/2025 18:00', status : 'F',comments: '.....'},
    {content: 'Cerrado', dateEvent : '15/10/2025 22:00', status : 'P',comments: 'Se enviaron moviles a la ubicación reportada'},

  ]

  timelineEvents = [
    {
      date: new Date(2024, 0, 1),
      description: 'Evento Creado'
    },
    {
      date: new Date(2024, 3, 15),
      description: 'Se trata el Evento '
    },
    {
      date: new Date(2024, 7, 8),
      description: 'Evento finalizado'
    }
    // Agrega más eventos según sea necesario
  ];

  ngOnInit(): void {
    this._getData();
  }

  private _getData(){
    this.router.params.subscribe(params=> {
      const id_bank = params['id']
      if(id_bank){
        console.log(id_bank, 'epa' )
        // this.bankService.getBankById(id_bank).subscribe( (bank:any) => {
        //   const {id, nombre,  numeroCuenta , codigoBancario, vigente} = bank.custom[0]
        //   this.bankForm.setValue({id, nombre, numeroCuenta,codigoBancario,vigente  })

        // })
      }
    })
  }
}

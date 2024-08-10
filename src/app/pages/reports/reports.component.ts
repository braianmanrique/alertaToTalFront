import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ReportsService } from 'src/app/services/reports.service';
Chart.register(...registerables);

Chart
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  chardata: any[] = [];

  labeldata : any[] = [];
  realdata : any[] = [];
  colordata : any[] = [];

  constructor(private service : ReportsService) {
    
  }

  ngOnInit(): void{
    this.loadData();

  }

    loadData(){
      
      this.service.loadReports().subscribe((item:any) => {
        this.chardata = item;
        if(this.chardata != null){
          this.chardata.map(o=> {
            this.labeldata.push(o.year);
            this.realdata.push(o.amount);

            this.colordata.push(o.colorcode);

          })
          this.Renderbarchart(this.labeldata, this.realdata , this.colordata)
          this.Renderpiechart(this.labeldata, this.realdata , this.colordata)
          this.RenderLinechart(this.labeldata, this.realdata , this.colordata)

        }
      })
    }

    Renderbarchart(labeldata: any[], valuedata: any[] , colordata: any[]){
      this.Renderchart(labeldata,valuedata,colordata, 'barchart', 'bar')
    }

    Renderpiechart(labeldata: any[], valuedata: any[] , colordata: any[]){
      this.Renderchart(labeldata,valuedata,colordata, 'piechart', 'pie')
    }


    RenderLinechart(labeldata: any[], valuedata: any[] , colordata: any[]){
      this.Renderchart(labeldata,valuedata,colordata, 'linechart', 'line')
    }


    Renderchart(labeldata: any[], valuedata: any[] , colordata: any[], chartid: string, charttype: any){
      const mychar = new Chart(chartid,{
        type: charttype,
        data: {
          labels: labeldata,
          datasets: [
            {
              label: 'Alertas',
              data: valuedata,
              backgroundColor: this.colordata
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const sales =  [
  {
    "year": 2019,
    "amount": 4000,
    "colorcode": "grey"
  },
  {
    "year": 2020,
    "amount": 7000,
    "colorcode": "orange"
  },
  {
    "year": 2021,
    "amount": 17000,
    "colorcode": "pink"
  },
  {
    "year": 2022,
    "amount": 12000,
    "colorcode": "green"
  },
  {
    "year": 2023,
    "amount": 1000,
    "colorcode": "green"
  },
  {
    "year": 2024,
    "amount": 200,
    "colorcode": "green"
  }
  ]
@Injectable({
  providedIn: 'root'
})

export class ReportsService {

  constructor(private http : HttpClient) { }

  loadReports(){
    return this.http.get("http://localhost:3000/sales");
    // return sales;
  }

  loadAlerts(){
    const token = localStorage.getItem('token') || '';

    return this.http.get<any[]>("https://alerta-total-back.onrender.com/api/alerts/all",{
      headers: {
        'x-token': token
      }
    })

  }
}

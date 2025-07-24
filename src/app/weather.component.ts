import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  city = '';
  weatherData: any;

  constructor(private http: HttpClient) {}

  getWeather() {
    console.log('Fetching weather for:', this.city);
    const apiKey = 'eade57f123daf06aff4640700823c8c1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`;

    this.http.get(url).subscribe({
      next: data => {
        console.log('Received data:', data); // ✅ Check this too
        this.weatherData = data;
      },
      error: err => {
        console.error('Error fetching weather:', err);
        alert('City not found or request failed');
      }
    });
  }
}

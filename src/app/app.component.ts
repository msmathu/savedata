import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private httpClient: HttpClient) {}


  title = 'NewDockerHelloApp';

  sendData(inputValue: string) {
    console.log('Input value:', inputValue);
  
    this.httpClient.post('http://localhost:8001/addData', JSON.stringify(inputValue), {
        headers: { 'Content-Type': 'application/json' }
      })
      .subscribe(
        data => {
          console.log('Data sent successfully:', data);
          alert('Data sent successfully!');
        },
        error => {
          console.error('Error sending data:', error);
          alert('Error sending data. Check the console for details.');
        }
      );
  }
  
  
}

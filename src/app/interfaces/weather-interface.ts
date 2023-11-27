export interface WeatherInterface {
     id: number; 
     city: string; 
     forecast: [{
     date: string,
     temperatureCelsius: number,
    temperatureFahrenheit: number,
    humidity: number
        }];
    
}

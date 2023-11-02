import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import useMovielist from "./hooks/useMovielist";

jest.mock('./hooks/useMovielist');

describe('<App />', () => {
  it('renders <App />', () => {
    ;(useMovielist as jest.Mock).mockReturnValue({
      weather: [
        {
          "location": {
            "name": "Sacramento",
            "region": "California",
            "country": "USA",
            "lat": 38.5,
            "lon": -121.53,
            "tz_id": "America/Los_Angeles",
            "localtime_epoch": 1698252298,
            "localtime": "2023-10-25 9:44"
          },
          "current": {
            "last_updated_epoch": 1698251400,
            "last_updated": "2023-10-25 09:30",
            "temp_c": 13.3,
            "temp_f": 55.9,
            "is_day": 1,
            "condition": {
              "text": "Overcast",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
              "code": 1009
            },
            "wind_mph": 8.1,
            "wind_kph": 13.0,
            "wind_degree": 180,
            "wind_dir": "S",
            "pressure_mb": 1014.0,
            "pressure_in": 29.93,
            "precip_mm": 0.0,
            "precip_in": 0.0,
            "humidity": 72,
            "cloud": 100,
            "feelslike_c": 11.6,
            "feelslike_f": 52.9,
            "vis_km": 16.0,
            "vis_miles": 9.0,
            "uv": 3.0,
            "gust_mph": 15.5,
            "gust_kph": 25.0
          },
          "forecast": {
            "forecastday": [
              {
                "time_epoch": 1698300000,
                "time": "2023-10-25 23:00",
                "temp_c": 15.6,
                "temp_f": 60.1,
                "is_day": 0,
                "condition": {
                  "text": "Overcast",
                  "icon": "//cdn.weatherapi.com/weather/64x64/night/122.png",
                  "code": 1009
                },
                "wind_mph": 10.5,
                "wind_kph": 16.9,
                "wind_degree": 229,
                "wind_dir": "SW",
                "pressure_mb": 1016.0,
                "pressure_in": 30.0,
                "precip_mm": 0.0,
                "precip_in": 0.0,
                "humidity": 69,
                "cloud": 100,
                "feelslike_c": 15.6,
                "feelslike_f": 60.1,
                "windchill_c": 15.6,
                "windchill_f": 60.1,
                "heatindex_c": 15.6,
                "heatindex_f": 60.1,
                "dewpoint_c": 9.9,
                "dewpoint_f": 49.9,
                "will_it_rain": 0,
                "chance_of_rain": 0,
                "will_it_snow": 0,
                "chance_of_snow": 0,
                "vis_km": 10.0,
                "vis_miles": 6.0,
                "gust_mph": 16.8,
                "gust_kph": 27.1,
                "uv": 1.0
              }
            ]
          }
        }
      ],
      error: null,
    })
    
    render(<App />);
    const linkElement = screen.getByText(/Basis React Test/i);
    expect(linkElement).toBeInTheDocument();
  });
})


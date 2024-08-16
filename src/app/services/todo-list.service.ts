import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface APIMock {
  count: number;
  next: string;
  previous: string;
  results: Object[];
}

interface ApiObject {
  name: String;
  url: String;
}

@Injectable({
  providedIn: 'root',
})
export class TodoApiService {
  //Properties
  url: string = 'https://pokeapi.co/api/v2/pokemon/?limit=3000';
  http = inject(HttpClient);

  constructor() {}
  getData(): void {
    try {
      fetch(this.url)
        .then((response) => {
          return response;
        })
        .then((data) => {
          data.json().then((data) => {
            console.log(data.results);
          });
        });
    } catch (error) {
      console.error(error);
    }
  }

  getDataWithPromiseFetch() {
    const getResult = new Promise((response, reject) => {
      fetch(this.url).then((data) => {
        data.json().then((val: APIMock) => {
          if (val) {
            response(val.results);
          } else {
            reject('Error');
          }
        });
      });
    });

    return getResult;
  }

  getDataHttpRequest() {
    let request = {};
    this.http.get(this.url).subscribe((resp) => {
      request = resp;
      console.log(resp);
    });
    return request;
  }

  // methods to retrieve and return data
}

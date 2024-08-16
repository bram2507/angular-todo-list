import { Injectable } from '@angular/core';

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

  getDataWithPromise() {
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
  // methods to retrieve and return data
}

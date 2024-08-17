import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class APIMock {
  public count: number = 0;
  public next: Object = {};
  public previous: Object = {};
  public results: Array<APIObject> = [];

  constructor(data: any) {
    this.count = (<APIMock>data).count;
    this.next = (<APIMock>data).next;
    this.previous = (<APIMock>data).previous;
    this.results = (<APIMock>data).results;
  }

  public getCount(): number {
    return this.count;
  }

  public getPrevious(): Object {
    return this.previous;
  }

  public getNext(): Object {
    return this.next;
  }

  public getResults(): Array<APIObject> {
    return this.results;
  }
}

export interface APIObject {
  name: string;
  url: any;
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
    return this.http.get(this.url);
  }

  // methods to retrieve and return data
}

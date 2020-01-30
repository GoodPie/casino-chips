import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public static classToObject = classObj => {
      const originalClass = classObj || {};
      const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(originalClass));
      return keys.reduce((classAsObj, key) => {
        classAsObj[key] = originalClass[key];
        return classAsObj;
      }, {});
  }
}

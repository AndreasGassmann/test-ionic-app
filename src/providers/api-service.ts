import { Injectable } from '@angular/core';
import { AuthService } from 'test-auth-service';

@Injectable()
export class ApiService {

  constructor(private authService: AuthService) {
    console.log('Hello ApiService Provider');
  }

}

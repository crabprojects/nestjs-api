import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'I have signed up' };
  }

  signin() {
    return { msg: 'I have signed in' };
  }
}

// const service = new AuthService() untuk mengindari penulisan langsung seperti ini di provider(service) maka kita gunakan mekanisme dependency injection agar kita tau siapa yang mengelolanya.

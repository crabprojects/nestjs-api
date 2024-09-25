import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {} //if we dont type export, kelas ini hanya akan tersedia di modul itu sendiri atau hanya didalam file itu sendiri(fle:app.module.ts)

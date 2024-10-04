import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule], // setiap melakukan pemanggilan module harus disertai dengan "import {nama_modul} from 'your_path_module' dibaris atas codingan"
})
export class AppModule {}

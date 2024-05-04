import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './schema/user.schema';
import { UserService } from './service/user/user.service';
import { UserController } from './controller/user/user.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sgcriollogal:-BuQiGJTapDry72@backend.fpfmnxv.mongodb.net',
      { dbName: 'backend-test-db' },
    ),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}

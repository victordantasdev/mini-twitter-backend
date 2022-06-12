import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [
    TweetsModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWD}@cluster0.ibf6kck.mongodb.net/test`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

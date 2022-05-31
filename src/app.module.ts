import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

const MONGO_HOST = 'cluster0.0cwmr.mongodb.net';
const MONGO_DB = 'blog';
const MONGO_USER = 'mongo';
const MONGO_PASS = 'BhBd6i1iiU3IHxo3';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://scam:jyJr70E13eRJZHXJ@scam.xsi5c.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

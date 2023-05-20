import { Injectable } from '@nestjs/common';
import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    const MONGO_URI =
      'mongodb+srv://ene-user:DuPgbuNTnxvdddkH@mongo-db.zf8flg7.mongodb.net/?retryWrites=true&w=majority';
    // const MONGO_URI = process.env.MONGO_URI;
    console.log(MONGO_URI);
    return {
      uri: MONGO_URI,
      dbName: 'db',
      connectionFactory: (connection) => {
        return connection;
      },
    };
  }
}

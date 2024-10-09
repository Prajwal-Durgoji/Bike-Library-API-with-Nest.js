import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bike } from './entities/bike.entity';
import { BikeController } from './controllers/bike.controller';
import { BikeService } from './services/bike.service';


@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'bike-library',
        entities: [Bike],
        synchronize: true,
        autoLoadEntities: true, 
        logging: true,
      }),
      TypeOrmModule.forFeature([Bike]),
    ],
    controllers: [AppController, BikeController],
    providers: [AppService, BikeService],
  })
  export class AppModule {}
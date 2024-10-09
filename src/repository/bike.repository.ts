import { Repository } from 'typeorm';
import { Bike } from '../entities/bike.entity';

export class BikeRepository extends Repository<Bike> {}
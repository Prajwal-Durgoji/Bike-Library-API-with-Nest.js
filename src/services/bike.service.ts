import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bike } from '../entities/bike.entity';
import { CreateBikeDto } from '../dto/create-bike.dto';
import { UpdateBikeDto } from '../dto/update-bike.dto';
import { BikeRepository } from 'src/repository/bike.repository';


@Injectable()
export class BikeService {
    constructor(
        @InjectRepository(Bike)
        private readonly bikeRepository: BikeRepository,
    ) {}

    async findAll(): Promise<Bike[]> {
        return this.bikeRepository.find();
    }

    async findOne(id: string): Promise<Bike> {
        const bike = await this.bikeRepository.findOneOrFail({ where: { id } }); // Updated method
        return bike;
    }

    async create(createBikeDto: CreateBikeDto): Promise<Bike> {
        const bike = this.bikeRepository.create(createBikeDto);
        return this.bikeRepository.save(bike);
    }

    async update(id: string, updateBikeDto: UpdateBikeDto): Promise<Bike> {
        await this.bikeRepository.update(id, updateBikeDto);
        return this.findOne(id);
    }

    async remove(id: string): Promise<void> {
        const bike = await this.findOne(id);
        await this.bikeRepository.remove(bike);
    }
}

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BikeService } from '../services/bike.service';
import { CreateBikeDto } from '../dto/create-bike.dto';
import { UpdateBikeDto } from '../dto/update-bike.dto';

@Controller('bikes')
export class BikeController {
    constructor(private readonly bikeService: BikeService) {}

    @Get()
    async findAll() {
        return this.bikeService.findAll();
    }

    @Post()
    async create(@Body() createBikeDto: CreateBikeDto) {
        return this.bikeService.create(createBikeDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateBikeDto: UpdateBikeDto) {
        return this.bikeService.update(id, updateBikeDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.bikeService.remove(id);
    }
}

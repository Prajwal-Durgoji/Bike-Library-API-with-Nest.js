import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BikeService } from '../services/bike.service';
import { CreateBikeDto } from '../dto/create-bike.dto';
import { UpdateBikeDto } from '../dto/update-bike.dto';

/**
 * Bike Controller
 * 
 * Handles HTTP requests related to bikes.
 */
@Controller('bikes')
export class BikeController {
    constructor(private readonly bikeService: BikeService) {}

    /**
   * Get all bikes
   * 
   * Handles GET requests to /bikes.
   * 
   * returns Promise<Bike[]> List of bikes
   */
    @Get()
    async findAll() {
        return this.bikeService.findAll();
    }

    /**
   * Create a new bike
   * 
   * Handles POST requests to /bikes.
   * 
   * param createBikeDto CreateBikeDto object
   * returns Promise<Bike> Created bike
   */
    @Post()
    async create(@Body() createBikeDto: CreateBikeDto) {
        return this.bikeService.create(createBikeDto);
    }

    /**
   * Update a bike
   * 
   * Handles PUT requests to /bikes/:id.
   * 
   * param id Bike ID
   * param updateBikeDto UpdateBikeDto object
   * returns Promise<Bike> Updated bike
   */
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateBikeDto: UpdateBikeDto) {
        return this.bikeService.update(id, updateBikeDto);
    }

    /**
   * Delete a bike
   * 
   * Handles DELETE requests to /bikes/:id.
   * 
   * param id Bike ID
   * returns Promise<void>
   */
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.bikeService.remove(id);
    }
}

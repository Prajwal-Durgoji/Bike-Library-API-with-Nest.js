import { IsString, IsInt } from 'class-validator';

export class CreateBikeDto {
    @IsString()
    make: string;

    @IsString()
    model: string;

    @IsInt()
    year: number;

    @IsString()
    type: string;
}

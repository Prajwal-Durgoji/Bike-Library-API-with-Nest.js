import { IsString, IsInt } from 'class-validator';

export class UpdateBikeDto {
    @IsString()
    make?: string;

    @IsString()
    model?: string;

    @IsInt()
    year?: number;

    @IsString()
    type?: string;
}

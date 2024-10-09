
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ErrorsFilter } from './filters/errors.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api'); 
    app.useGlobalFilters(new ErrorsFilter());
    const config = new DocumentBuilder()
        .setTitle('Bike Library API')
        .setDescription('API for managing a bike library')
        .setVersion('1.0.0')
        .build();

    const document = SwaggerModule.createDocument(app, config,{
        ignoreGlobalPrefix: false,
    });
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();

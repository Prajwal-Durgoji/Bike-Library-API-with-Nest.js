
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ErrorsFilter } from './filters/errors.filter';

/**
 * Bootstrap function
 * 
 * Initializes and starts the NestJS application.
 */
async function bootstrap() {
    // Create a new NestJS application instance
    const app = await NestFactory.create(AppModule);
  
    // Set the global prefix for API endpoints
    app.setGlobalPrefix('api'); 
  
    // Register global error filters
    app.useGlobalFilters(new ErrorsFilter());
  
    // Configure Swagger API documentation
    const config = new DocumentBuilder()
      .setTitle('Bike Library API') // API title
      .setDescription('API for managing a bike library') // API description
      .setVersion('1.0.0') // API version
      .build();
  
    // Create Swagger document
    const document = SwaggerModule.createDocument(app, config, {
      // Include global prefix in Swagger endpoints
      ignoreGlobalPrefix: false,
    });
  
    // Setup Swagger API documentation
    SwaggerModule.setup('api', app, document);
  
    // Start the application and listen on port 3000
    await app.listen(3000);
  }
  
  // Call the bootstrap function to start the application
  bootstrap();
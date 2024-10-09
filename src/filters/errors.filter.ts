// errors.filter.ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';

@Catch()
export class ErrorsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    let errorMessage;
    if (exception instanceof NotFoundException) {
      errorMessage = exception.message;
    } else {
      errorMessage = 'Internal Server Error';
    }

    response.status(status).json({
      statusCode: status,
      message: errorMessage,
    });
  }
}
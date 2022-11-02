import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ParamsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest() as Request;

    return next.handle().pipe(
      map((data) => {
        console.log(request.params, request.query);
        return {
          ...request.query,
          ...request.params,
          ...data,
        };
      }),
    );
  }
}

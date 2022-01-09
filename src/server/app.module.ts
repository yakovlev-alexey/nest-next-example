import { DynamicModule, MiddlewareConsumer, Module } from '@nestjs/common';
import Next from 'next';
import { RenderModule } from 'nest-next';
import { NODE_ENV } from 'src/shared/constants/env';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { translationsMiddleware } from './translations.middleware';

declare const module: any;

@Module({})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(translationsMiddleware).forRoutes('*');
  }

  public static initialize(): DynamicModule {
    const renderModule =
      module.hot?.data?.renderModule ??
      RenderModule.forRootAsync(Next({ dev: NODE_ENV === 'development' }), {
        viewsDir: null,
      });

    if (module.hot) {
      module.hot.dispose((data: any) => {
        data.renderModule = renderModule;
      });
    }

    return {
      module: AppModule,
      imports: [renderModule],
      controllers: [AppController],
      providers: [AppService],
    };
  }
}

import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Render,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ParamsInterceptor } from './params.interceptor';
import { ConfigInterceptor } from './config.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  @UseInterceptors(ParamsInterceptor, ConfigInterceptor)
  home() {
    return {};
  }

  @Get('/about/**')
  @Render('about/[...all]')
  @UseInterceptors(ParamsInterceptor, ConfigInterceptor)
  about() {
    return {};
  }

  @Get('/:id')
  @Render('[id]')
  @UseInterceptors(ParamsInterceptor, ConfigInterceptor)
  public post() {
    return {};
  }

  @Get('/blog-posts')
  @Render('blog-posts')
  @UseInterceptors(ParamsInterceptor, ConfigInterceptor)
  blogPosts() {
    return {};
  }

  @Get('/blog-posts/:id')
  @Render('blog-posts/[id]')
  @UseInterceptors(ParamsInterceptor, ConfigInterceptor)
  public blogPost() {
    return {};
  }

  @Get('/api/blog-posts')
  public listBlogPosts() {
    return this.appService.getBlogPosts();
  }

  @Get('/api/blog-posts/:id')
  public getBlogPostById(@Param('id', new ParseIntPipe()) id: number) {
    return this.appService.getBlogPost(id);
  }
}

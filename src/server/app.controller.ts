import { Controller, Get, Param, ParseIntPipe, Render } from '@nestjs/common';
import { map, toArray } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  home() {
    return {};
  }

  @Get(':id')
  @Render('[id]')
  public blogPost(@Param('id', new ParseIntPipe()) id: number) {
    return { id };
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

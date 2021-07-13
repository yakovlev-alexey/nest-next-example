import { Controller, Get, Param, ParseIntPipe, Render } from '@nestjs/common';
import { map, toArray } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  home() {
    return this.appService.getBlogPosts().pipe(
      toArray(),
      map((blogPosts) => ({ blogPosts })),
    );
  }

  @Get(':id')
  @Render('[id]')
  public blogPost(@Param('id', new ParseIntPipe()) id: number) {
    return {};
  }
}

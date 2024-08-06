import { Controller, Get, Render } from '@nestjs/common';

@Controller('live')
export class LiveController {
  @Get()
  @Render('live')
  live() {
    return { title: 'Live Esports' };
  }
}

import { Controller, Get, Post, Body, Render } from '@nestjs/common';

@Controller('imc')
export class ImcController {

  @Get()
  @Render('imc')
  getImcForm() {
    return {};
  }

  @Post()
  @Render('imc')
  calculateImc(@Body() body) {
    const { height, weight } = body;
    const imc = weight / (height * height);
    return { imc: imc.toFixed(2) };
  }
}

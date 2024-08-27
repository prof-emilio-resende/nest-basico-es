import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { ImcCalculatorService } from './imc-calculator.service';
import { ImcCalculatorRequest } from './imc-calculator.dtos';

@Controller('imc')
export class ImcCalculatorController {
  constructor(private readonly imcCalcService: ImcCalculatorService) {}

  @Get('hello')
  getHello() {
    return this.imcCalcService.hello();
  }

  @Get('table')
  getTable() {
    return this.imcCalcService.getTable();
  }

  @Get('table/html')
  @Render('imcTable') 
  getTableHtml() {
    return { data: this.imcCalcService.getTable() };
  }

  @Get('calculate')
  @Render('imcForm') 
  showForm() {
    return {};
  }

  @Post('calculate')
  @Render('imcForm') 
  calculate(@Body() request: ImcCalculatorRequest) {
    const imc = this.imcCalcService.calculateAndTranslate(request);
    return imc; 
  }
}

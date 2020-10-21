import { Controller, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { orderDTO } from './dto/order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post(':rut')
  getHello(@Param() params): orderDTO {
    const order = new orderDTO(params.rut)
    return order;
  }
}

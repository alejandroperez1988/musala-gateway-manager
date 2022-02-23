import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Gateways } from './gateways.interface';
import { GatewaysService } from './gateways.service';

@Controller('gateways')
export class GatewaysController {
  constructor(private readonly gatewaysService: GatewaysService) {}

  //---Get Methods
  @Get()
  getAllGateways(): Gateways[] {
    return this.gatewaysService.getAllGateways();
  }
  @Get('gateway/:id')
  getGateway(@Param('id') id: string): Gateways {
    return this.gatewaysService.getGateway(id);
  }
  //---Delete Methods
  @Delete('gateway/:id')
  deleteGateway(@Param('id') id: string) {
    return this.gatewaysService.deleteGateway(id);
  }
  //---Post Methods
  @Post()
  addGateway(@Body() gateway: Gateways) {
    return this.gatewaysService.addGateway(gateway);
  }

  @Patch('update/:id')
  editGateway(@Param('id') id: string, @Body() gateway: Gateways) {
    return this.gatewaysService.updateGateway(id, gateway);
  }
}

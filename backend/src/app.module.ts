import { Module } from '@nestjs/common';
import { GatewaysModule } from './gateways/gateways.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'gateways-front'),
    }),
    GatewaysModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

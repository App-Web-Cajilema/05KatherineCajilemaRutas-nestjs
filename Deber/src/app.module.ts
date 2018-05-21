import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PreguntasFrecuentes} from "./preguntasFrecuentes";
import {Inicio} from "./inicio";

@Module({
  imports: [],
  controllers: [AppController,
  Inicio,PreguntasFrecuentes],
  providers: [AppService],
})
export class AppModule {}

import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {Inicio} from "./inicio";

const fs = require('fs');
let contador=0;
@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    //return this.appService.root();
      const nombre = 'Katherine Cajilema';
      let html = fs.readFileSync(
          __dirname+'/html/contenido.html',
          'utf8');
      html = html.replace('{{nombre}}',nombre);
      return html;
  }
}

import {Controller, Get, HttpCode, Req, Res} from "@nestjs/common";
//variable
const fs = require('fs');
const nombre = 'Katherine Cajilema';
//decorador
@Controller()
export class Inicio {
    @Get('Home')
    buscarHtml(@Req() req, @Res() res){
        let Footer=fs.readFileSync(
            __dirname+'/html/footer.html',
            'utf8');
        let Header= fs.readFileSync(
            __dirname+'/html/header.html',
            'utf8');
        let Contenido= fs.readFileSync(
            __dirname+'/html/contenido.html',
            'utf8');
        Contenido = Contenido.replace('{{nombre}}',nombre);

        let Todo= Header + Contenido + Footer;

        const existeContenido = (Todo);

        // Todo sale bien
        if(existeContenido) {
            console.log(res.status(200).send(Todo));
            return res.status(200).send(Todo);
        }else {
            return res.status(500).send({mensaje: 'Existen errores', status: 500})
        }

    }
}
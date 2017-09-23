import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

//Importado modelo
import {Usuario} from '../../modules/usuario.model';
//Importando Componente TOAS de IONIC
import { ToastController } from 'ionic-angular';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  //usuario:Usuario[]=[];

    //hdrs:Headers = new Headers();
  //hdrs.append('Content-Type', "application/json");      
 
   //options = new RequestOptions({ headers: hdrs});



  /*Servicio Restfull Cake PHP BD: MSQL*/
   url:string = "http://servicios-raulbastidas654549.codeanyapp.com/users.json";		

  constructor(public http: Http,private toastCtrl:ToastController) {
    console.log('Hello UsuarioProvider Provider');
  }

  obtenerUsuarios(){
  	console.log("Obtener Usuarios");
  	return this.http.get(this.url).map(
  		res => {
  			console.log("Consulta Get Usuario");
  			console.dir(res.json());
  			return res.json();
  		});
  }

  registrarUsuario(usuario:any){

    console.log("Registrar usuario");
    this.lanzarMensaje();
     var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
    
    //let body = JSON.stringify(usuario);
    console.log(usuario);
    return this.http.post(this.url,usuario,options).map(
      res =>{
        console.log("solicitud recibida");
        console.log(res.json());
        return res.json();
      }
    )

  }


    private lanzarMensaje(){
      let toast = this.toastCtrl.create({
        message:'Guardando Usuario .....',
        duration:3000,
        position:'top'
      });
      toast.present();
    }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//importar componentes de Ionic
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
//importar componentes propios
import { FormularioPage } from '../formulario/formulario';
import { HomePage } from '../home/home';
//Importando modelo
import {Usuario} from '../../modules/usuario.model';
//Importando sefvicio
import {UsuarioProvider} from '../../providers/usuario/usuario';

 
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  respuestas:Usuario []=[];

  username: AbstractControl;
  password:AbstractControl;
  errorMessage:string = null;
  loginForm : FormGroup;	

  

  constructor(public navCtrl: NavController, 
  		 	      public navParams: NavParams,
  		 	      private fb:FormBuilder,
              private usuarioCtrl:UsuarioProvider) 
  {

  	this.loginForm = fb.group({
  		'username' : ['',Validators.compose([Validators.required])],
		  'password' : ['',Validators.compose([Validators.required])],
  	});

  	this.username = this.loginForm.controls['username'];
  	this.password = this.loginForm.controls['password'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  //Metodo privado para iniciar sesion
  private login() {
  	//logica de validación acá
    console.log("Inicia Sesion");
    console.dir(this.username.value);
    console.dir(this.password.value);

    this.usuarioCtrl.obtenerUsuarios().subscribe(
      data=>{
        console.log("Consulta Exitosa");
        //console.dir(data['users']);
        for(let key in data['users']) {
           if(this.username.value === data['users'][key].cedula  && this.password.value === data['users'][key].password ){
             console.log("True");
             this.navCtrl.setRoot(HomePage,{'parametro':this.username.value});
         
             break;
           }else{
             console.log("False");
           }
          
          
        }



      },
      err=>{
        console.error("err");
      }
    );
  	
  
  }

 //Metodo privado para registrar usuario
  private registrar(){
    console.log("Registrar");
    this.navCtrl.push(FormularioPage);
  }

}

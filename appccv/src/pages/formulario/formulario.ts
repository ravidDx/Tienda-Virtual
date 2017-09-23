import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
//importar componentes de Ionic
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

//Importado Modelo
import {Usuario} from '../../modules/usuario.model';
//Importando Servicio
import {UsuarioProvider} from '../../providers/usuario/usuario';
//Importando TOAST ()Componente de IONIC 
 

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
  
  myForm : FormGroup;
  usuario:Usuario;

  constructor(public navCtrl: NavController, 
      			  public navParams: NavParams,
      			  private fb:FormBuilder,
              private usuarioCtrl:UsuarioProvider,
              private toastCtrl:ToastController) 
  {
  	this.myForm = this.crearMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  //Metodo privado para crear formulario
  private crearMyForm(){
  	return this.fb.group({
  		nombres:['',Validators.required],
  		apellidos:['',Validators.required],
  		cedula:['',Validators.required],
  		email:['',[Validators.required,Validators.email ]],
  		passwordRetry: this.fb.group({
	      password: ['', [Validators.required,Validators.pattern(/^[a-z0-9_-]{6,18}$/)] ],
	      passwordConfirmation: ['', [Validators.required,Validators.pattern(/^[a-z0-9_-]{6,18}$/)] ]
	    }),
  	});
  }

  private guardarForm(){
  	console.log("Metodo gradar Form");
  	
    //this.usuario.nombres=this.myForm.value.nombres;
    //this.usuario.apellidos=this.myForm.value.apellidos;
    //this.usuario.cedula=this.myForm.value.cedula;
    //this.usuario.correo=this.myForm.value.email;
    //this.usuario.password=this.myForm.value.passwordRetry.password;

    //console.log(this.usuario);

    let user ={
      nombres:this.myForm.value.nombres,
      apellidos:this.myForm.value.apellidos,
      correo:this.myForm.value.email,
      cedula:this.myForm.value.cedula,
      password:this.myForm.value.passwordRetry.password
    }


    this.usuarioCtrl.registrarUsuario(user).subscribe(
       res=>{
         this.lanzarMensaje();
         console.log("Guardado Form Exitos");
         console.log(res);
         this.navCtrl.pop();
       }
     );


  }

  private lanzarMensaje(){
      let toast = this.toastCtrl.create({
        message:'Registro Exitoso',
        duration:2000
      });
      toast.present();
    }


}

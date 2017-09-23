export class Usuario{
	nombres:string;
	apellidos:string;
	cedula:string;
	correo:string;
	password:string;

	constructor(nombres:string,apellidos:string,cedula:string,correo:string,password:string){
		this.nombres = nombres;
		this.apellidos = apellidos;
		this.cedula = cedula;
		this.correo = correo;
		this.password = password;
		
	}
}
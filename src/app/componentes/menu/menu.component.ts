import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/modelos/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';


//menu
declare var window: any;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
       
    //modal
    loginModal: any;
    

    //login
    isLogged = false;
    isLoginFail = false;
    loginUsuario!: LoginUsuario;
    nombreUsuario!: string;
    password!: string;
    roles: string[] = [];
    errMsj!: string;

    //login
    constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

    ngOnInit(): void {

        //login - logout
        if (this.tokenService.getToken()) {
            this.isLogged = true;
            this.isLoginFail = false;
            this.roles = this.tokenService.getAuthorities();
        } else {
            this.isLogged = false;
        }
               
        //modal
        this.loginModal = new window.bootstrap.Modal(
            document.getElementById('login-modal')
        );

    }

    //modal
    abrirLoginModal() :void{
        this.loginModal.show();
       
    }

    //modal
    cerrarLoginModal() :void{
        this.loginModal.hide();
       
    }

    //login
    onLogin(): void {
        this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
        this.authService.login(this.loginUsuario).subscribe(data=>{
            this.isLogged = true;
            this.isLoginFail = false;
            this.tokenService.setToken(data.token);
            this.tokenService.setUsername(data.nombreUsuario);
            this.tokenService.setAuthorities(data.authorities);
            this.roles = data.authorities;
            
            this.cerrarLoginModal();

            window.location.reload();
            
            /* 
            console.log(this.nombreUsuario);
            console.log(this.password);
            console.log(this.roles); 
            */
  
        }, err => {
            this.isLogged = false;
            this.isLoginFail = true;
            alert("Error en las credenciales");
            /* window.location.reload(); */
           
        })

         
    }

    onLogOut() :void {
        this.tokenService.logOut();
        window.location.reload();
    }

        
    
    
}

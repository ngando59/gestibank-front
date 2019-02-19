import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Client } from '../../modele/user/Client';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
  providers: [ClientService]
})
export class ClientDetailComponent implements OnInit {
  id: number;
  client: Client;
  userForm: FormGroup;
  sub: any;
  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => { this.id = params.id; });

    this.userForm = new FormGroup({
      identifiant: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
      motDePasse: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      telephone: new FormControl(),
      nbEnfants: new FormControl(),
      situationMatrimoniale: new FormControl()
    }
    );

    if (this.id) {
      this.clientService.findById(this.id).subscribe(
       client => {
         this.id = client.id;
         this.userForm.patchValue({
           email: client.email,
           identifiant: client.identifiant,
           motDePasse: client.motDePasse,
           nom: client.nom,
           prenom: client.prenom,
           telephone: client.telephone,
           nbEnfants: client.nbEnfants,
           situationMatrimoniale: client.situationMatrimoniale
         });
       }, error1 => {
         console.log(error1);
        }
      );
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    console.log('>>>>>>>>> submit clicked');
    if (this.userForm.valid) {

      if (this.id) {
        console.log('>>>>>>>>> UPDATE CLIENT');
        const client: Client = new Client(this.id,
          this.userForm.controls.email.value,
          this.userForm.controls.identifiant.value,
          this.userForm.controls.motDePasse.value,
          this.userForm.controls.nom.value,
          this.userForm.controls.prenom.value,
          this.userForm.controls.telephone.value,
          this.userForm.controls.nbEnfants.value,
          this.userForm.controls.situationMatrimoniale.value);
        this.clientService.updateClient(client).subscribe(
          res => {
            this.userForm.reset();
            this.router.navigate(['/client']);
          }
        );
      } else {
        console.log('>>>>>>>>> ADD CLIENT');
        const client: Client = new Client(null,
          this.userForm.controls.email.value,
          this.userForm.controls.identifiant.value,
          this.userForm.controls.motDePasse.value,
          this.userForm.controls.nom.value,
          this.userForm.controls.prenom.value,
          this.userForm.controls.telephone.value,
          this.userForm.controls.nbEnfants.value,
          this.userForm.controls.situationMatrimoniale.value);
        this.clientService.saveClient(client).subscribe(
          res => {
            this.userForm.reset();
            this.router.navigate(['/client']);
          }
        );
      }
    }
  }

  redirectClientPage() {
    this.router.navigate(['/client']);
  }

}

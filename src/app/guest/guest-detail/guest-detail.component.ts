import { Component, OnInit } from '@angular/core';
import {GuestService} from '../../guest.service';
import {Guest} from '../../modele/user/Guest';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { DialogService } from "ng2-bootstrap-modal";
import {AlertComponent} from '../../alert';

@Component({
  selector: 'app-guest-detail',
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.css'],
  providers: [GuestService]
})
export class GuestDetailComponent implements OnInit {
  id: number;
  guest: Guest;
  guestForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private guestService: GuestService, private dialogService:DialogService) { }

  ngOnInit() {
    this.guestForm = new FormGroup({
      nom: new FormControl('Mbappe', Validators.required),
      prenom: new FormControl('Kylian', Validators.required),
      telephone: new FormControl('0102030405', Validators.required),
      nbEnfants: new FormControl(0, Validators.required),
      situationMatrimoniale: new FormControl('Célibataire', Validators.required),

      rue: new FormControl('rue des Champs Elysées', Validators.required),
      ville: new FormControl('Paris', Validators.required),
      codePostal: new FormControl('75000', Validators.required),
      pays: new FormControl('France', Validators.required),

      email: new FormControl('k.mbappe@gmail.com', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
      motDePasse: new FormControl('1234', Validators.required)
    });
  }

  ngOnDestroy() {
  }

  onSubmit() {
    if(this.guestForm.valid) {
      let guest: Guest = new Guest(null,
        this.guestForm.controls.email.value,
        '',
        this.guestForm.controls.motDePasse.value,
        this.guestForm.controls.nom.value,
        this.guestForm.controls.prenom.value,
        this.guestForm.controls.telephone.value,
        this.guestForm.controls.nbEnfants.value,
        this.guestForm.controls.situationMatrimoniale.value,
        this.guestForm.controls.rue.value,
        this.guestForm.controls.codePostal.value,
        this.guestForm.controls.ville.value,
        this.guestForm.controls.pays.value);

      let response: any = this.guestService.ouvrirUnCompte(guest).subscribe(
        (res) => {
          this.dialogService.addDialog(AlertComponent, {title:'Creation de compte', message: res.response});
        }
      );

      this.guestForm.reset();
      this.router.navigate(['/user/connexion'])
    }

  }

}

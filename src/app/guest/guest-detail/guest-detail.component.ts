import { Component, OnInit } from '@angular/core';
import {GuestService} from '../../guest.service';
import {Guest} from '../../modele/user/Guest';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalComponent} from '../../_directives';

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

  constructor(private route: ActivatedRoute, private router: Router, private guestService: GuestService) { }

  ngOnInit() {
    this.guestForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      telephone: new FormControl(),
      nbEnfants: new FormControl(),
      situationMatrimoniale: new FormControl(),

      rue: new FormControl('', Validators.required),
      ville: new FormControl('', Validators.required),
      codePostal: new FormControl('', Validators.required),
      departement: new FormControl('', Validators.required),
      pays: new FormControl('', Validators.required),

      email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
      motDePasse: new FormControl('', Validators.required)
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
        this.guestForm.controls.departement.value,
        this.guestForm.controls.pays.value);
      this.guestService.ouvrirUnCompte(guest).subscribe();
      alert('Votre demande de création de compte a été envoyé!<br>\n' +
        'Nous reviendrons vers vous bientôt après étude de votre dossier!');
      this.guestForm.reset();
      this.router.navigate(['/user/connexion'])
    }

  }

}

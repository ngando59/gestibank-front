import { Component, OnInit } from '@angular/core';
import { Client } from '../../modele/user/Client';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  private clients: Client[];

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() {
    this.clientService.findAll().subscribe(
      clients => {
        this.clients = clients;
      },
      err => {
        console.log(err);
      }
    );
  }

  redirectNewClientPage() {
    this.router.navigate(['client/create']);
  }

  viewClientPage(client: Client) {
    this.router.navigate(['client/view', client.id]);
  }

  editClientPage(client: Client) {
    this.router.navigate(['client/edit', client.id]);
  }

  deleteClient(client: Client) {
    if (client) {
      console.log('>>>>>>>>> DELETE CLIENT ID: ' + client.id);
      this.clientService.deleteClientById(client.id).subscribe(
        res => {
          this.router.navigate(['/client']);
        }
      );
    }
  }

}

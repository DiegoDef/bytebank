import { Component, EventEmitter, Output } from "@angular/core";
import { TransferenciaService } from "../services/transferencia.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {};

  transferir() {
    console.log("Tranferência solicitada!");

    const valorEmitir = {valor: this.valor, destino: this.destino} as any;
    this.service.adicionar(valorEmitir).subscribe({
      next: (resultado) => {
      this.router.navigateByUrl('extrato')
      },
      error: error => console.error(error)
    });
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}

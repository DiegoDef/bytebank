import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter();

  valor: number;
  destino: number;

  transferir() {
    console.log("Tranferência solicitada!");

    const valorEmitir = {valor: this.valor, destino: this.destino} as any;
    this.aoTransferir.emit(valorEmitir);

    this.limparCampo();
  }

  limparCampo() {
    this.valor = 0;
    this.destino = 0;
  }
}

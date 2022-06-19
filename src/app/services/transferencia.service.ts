import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaDeTransferencias: any[];

  constructor() {
    this.listaDeTransferencias = [];
  }

  get transferencias() {
    return this.listaDeTransferencias;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.listaDeTransferencias.push(transferencia);
  }

  private hidratar(transferencia) {
    transferencia = {...transferencia, data: new Date()}
  }

}

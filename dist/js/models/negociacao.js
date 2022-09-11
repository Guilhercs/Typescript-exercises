export class Negociacao {
  _data;
  _quantidade;
  _valor;

  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  get data() {
    this._data;
  }

  get quantidade() {
    this._quantidade;
  }

  get valor() {
    this._valor;
  }
}

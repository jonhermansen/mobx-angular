import { Component, OnInit } from '@angular/core';
import { Account } from '../stores/account.store';

@Component({
  selector: 'app-balance',
  template: `
    <p *mobxAutorun>
      Your current balance:
      <span [class.negative]="account.isNegative">$ {{ account.balance }}</span>
    </p>
  `,
  styles: [
    `.negative {
      color: red;
    }`
  ]
})
export class BalanceComponent implements OnInit {

  constructor(private account: Account) { }

  ngOnInit() {
  }

}

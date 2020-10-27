import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test2';

  firstOperand: number;
  secondOperand: number;

  invertNeeded: string = "none";
  operation: string;

  result: boolean;
  error: string;

  tempResult: number;

  submitFunc() {
    this.result = undefined;
    this.error = "NoN";

    if (this.firstOperand == undefined || this.firstOperand == undefined || this.operation == undefined) {
      this.error = "Необходимо заполнить все поля!";
    } else {
      if (this.operation == "||") { this.tempResult = this.firstOperand || this.secondOperand; }
      else if (this.operation == "&&") { this.tempResult = this.firstOperand && this.secondOperand; }

      console.log(this.tempResult);

      if (this.invertNeeded == "true") {
        console.log("needed");
        if (this.tempResult == 0) { this.result = true; }
        else { this.result = false; }
      } else {
        console.log("not needed");
        if (this.tempResult == 0) { this.result = false; }
        else { this.result = true; }
      }

      console.log(this.result);
    }
  }
}

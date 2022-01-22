import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-pipe';
  result = `
  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'initials'
  })
  export class InitialsPipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
     return null;
    }

  }`

  implementation = `
  transform(value: string, ...args: string[]): string {
    const names = value.split(' ');
    return names[0].charAt(0).toUpperCase() + (names[1]?.charAt(0).toUpperCase() ?? names[0].charAt(1).toUpperCase());
  }
  `
  variableNameCode = `variableName = 'Alberto Tejero Morales' `
  variableName = 'Alberto Tejero Morales'
}

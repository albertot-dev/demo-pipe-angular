import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const names = value.split(' ');
    if (args[0] === 'lowercase') {
      return names[0].charAt(0)
        .toLowerCase() + (names[1]?.charAt(0)
          .toLowerCase() ?? names[0].charAt(1).toLowerCase());
    }
    return names[0].charAt(0)
      .toUpperCase() + (names[1]?.charAt(0)
        .toUpperCase() ?? names[0].charAt(1).toUpperCase());
  }

}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userVisibleAttributeFilter'
})
export class UserVisibleAttributeFilterPipe implements PipeTransform {

  transform(items: any[]): unknown {
    if (!items) {
            return items;
    }
    return items.filter(item => item.attributeDef.attributeDef.enduserVisible === true);
  }

}

import { Injectable } from '@angular/core';
import { dropdownItem } from './core/ui/dropdown-menu/dropdown.class';
import { TreatmentItems } from './core/interface/interface';

@Injectable()
export class AppService {

    public static ItemsSource: dropdownItem[];
    public static TreatmentItemsName: string;

    public setCommonData() {
        AppService.TreatmentItemsName = '服務項目';
        let items: dropdownItem[] = [];
        items[0] = { label: '五十肩' };
        items[1] = { label: '肢體障礙' };
        AppService.ItemsSource = items;
    }

    public getItemsSource(): TreatmentItems {
        return {
            name: AppService.TreatmentItemsName,
            items: AppService.ItemsSource
        };
    }


}
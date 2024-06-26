import { Component, Input, OnChanges, SimpleChanges, WritableSignal, signal } from '@angular/core';
import { Option } from '../fields/select-field/select-field.component';

export interface ColumnDefinition {
  attr: string;
  label: string;
}

export interface TableAction {
  id: string;
  label: string;
  fn(rowObject: any): void;
}

@Component({
  selector: 'custom-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges {
  @Input() public columnDefinitions: ColumnDefinition[] = [];
  @Input() public rowObjects: Array<any> = []; // eslint-disable-line
  @Input() public rowObjectsToShow: Array<any> = []; // eslint-disable-line
  @Input() public actions: Array<TableAction> = [];
  public contextMenu: boolean = false;

  public options: Array<Option> = [
    { label: '5' , value: '5' },
    { label: '10' , value: '10' },
    { label: '20' , value: '20' }
  ];
  
  public rowQuantity: WritableSignal<RowQuantity | undefined> = signal({ value: '5' });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rowObjects'].currentValue !== changes['rowObjects'].previousValue) {
      let rowQuantityValue: RowQuantity = this.rowQuantity() || <RowQuantity>{};
      this.updateRowQuantity(rowQuantityValue.value);
    }
  }

  updateRowQuantity(value: string): void {
    this.rowObjectsToShow = this.rowObjects.slice(0, parseInt(value));
  }

  onRowQuantityChange(value: string): void {
    this.updateRowQuantity(value);
  }

  public isURL(source: string): boolean {
    return source.startsWith("http://") || source.startsWith("https://");
  }

  public isDate(source: string): boolean {
    return !isNaN(new Date(source).getDate());
  }

  public parseDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }

  public actionClick(action: TableAction, rowObject: any): void {
    action.fn(rowObject);
  }
}

interface RowQuantity {
  value: string
}
import { DataSource } from '@angular/cdk/collections';
import { BillResDTO } from '../../../dtos/res/BillResDTO';
import { map, Observable, ReplaySubject } from 'rxjs';

class BillsDataSource extends DataSource<BillResDTO> {
  private billsStream = new ReplaySubject<BillResDTO[]>();
  constructor(bill: BillResDTO[]) {
    super();
    this.setData(bill);
  }

  connect(): Observable<BillResDTO[]> {
    return this.billsStream;
  }

  disconnect() {
    this.billsStream.complete();
  }

  setData(bills: BillResDTO[]) {
    this.billsStream.next(bills);
  }

  revalidateData(bill: BillResDTO) {
    this.billsStream.next([
      this.billsStream.pipe(map((bills) => [...bills, bill])),
    ]);
  }
}

export { BillsDataSource };

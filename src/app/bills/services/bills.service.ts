import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FetchService } from '../../utils/fetch.service';
import { BillReqDTO } from '../../../dtos/req/BillReqDTO';
import {
  createBillUrl,
  getBillsUrl,
} from '../../../constants/httpUrlConstants';
import { BillResDTO } from '../../../dtos/res/BillResDTO';

@Injectable({
  providedIn: 'root',
})
export class BillsService {
  private fetchService: FetchService = inject(FetchService);

  createBill(bill: any) {
    return this.fetchService.genericPostPetition<null, BillReqDTO>(
      createBillUrl,
      bill
    );
  }

  getBills() {
    return this.fetchService.genericGetPetition<BillResDTO[]>(getBillsUrl);
  }
}

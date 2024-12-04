import { inject, Injectable } from '@angular/core';
import { FetchService } from '../../utils/fetch.service';
import { PromosResDTO } from '../../../dtos/res/PromosResDTO';
import { getAllPromosUrl } from '../../../constants/httpUrlConstants';

@Injectable({
  providedIn: 'root',
})
export class PromosService {
  constructor() {}

  private fetchService = inject(FetchService);

  public getPromos = () => {
    return this.fetchService.genericGetPetition<PromosResDTO[]>(
      getAllPromosUrl
    );
  };
}

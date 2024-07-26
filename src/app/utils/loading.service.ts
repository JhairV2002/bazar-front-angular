import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  public loading = signal(false);

  public startLoading(): void {
    this.loading.set(true);
  }

  public stopLoading(): void {
    this.loading.set(false);
  }
}

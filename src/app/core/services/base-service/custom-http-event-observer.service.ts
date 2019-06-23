import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()

/**
 * Observables para customizar ações antes e depois de um request
 * @param beforeRequest - dispara um evento antes de iniciar um request
 * @param afterRequest - dispara um evento depois de iniciar um request
 */
export class CustomHttpEventObserverService {
    afterRequest: Subject<void> = new Subject<void>();
    beforeRequest: Subject<void> = new Subject<void>();
}

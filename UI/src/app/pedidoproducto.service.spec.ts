import { TestBed, inject } from '@angular/core/testing';

import { PedidoproductoService } from './pedidoproducto.service';

describe('PedidoproductoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PedidoproductoService]
    });
  });

  it('should be created', inject([PedidoproductoService], (service: PedidoproductoService) => {
    expect(service).toBeTruthy();
  }));
});

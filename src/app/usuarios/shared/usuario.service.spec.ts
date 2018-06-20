import { TestBed, inject } from '@angular/core/testing';

import { usuarioService } from './Usuario.service';

describe('UsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [usuarioService]
    });
  });

  it('should be created', inject([usuarioService], (service: usuarioService) => {
    expect(service).toBeTruthy();
  }));
});

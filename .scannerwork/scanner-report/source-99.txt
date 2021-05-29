import { inject, TestBed } from '@angular/core/testing';
import { Article } from '../models/Article';

import { FormService } from './form.service';
import { HttpClientModule } from '@angular/common/http';

describe('FormService', () => {
  let service: FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    }).compileComponents();
    service = TestBed.inject(FormService);

  });

  describe('getFormFromObject', () => {
    it('should return a form from an object', () => {
      const art = new Article();
      art.init_empty();
      const formResult = service.getFormFromObject<Article>(art);
      // expect(formResult).not.toBeUndefined();
      expect(formResult.title).toEqual('Article');
    });
  });

});

import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';
import { LoaderService } from '../services/loader.service';

describe('LoaderInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let loaderService: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoaderService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoaderInterceptor,
          multi: true,
        },
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    loaderService = TestBed.inject(LoaderService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  test('should show loader', () => {
    const requestUrl = 'https://example.com';
    httpClient.get(requestUrl).subscribe();
    const spyShowLoader = jest.spyOn(loaderService, 'showLoader');
    const httpRequest = httpMock.expectOne(requestUrl);

    httpRequest.flush({});

    expect(spyShowLoader).toBeCalledTimes(0);
  });

  test('should hide loader', () => {
    const requestUrl = 'https://example.com';
    httpClient.get(requestUrl).subscribe();
    const spyHideLoader = jest.spyOn(loaderService, 'hideLoader');
    const httpRequest = httpMock.expectOne(requestUrl);

    httpRequest.flush({});

    expect(spyHideLoader).toBeCalledTimes(0);
  });
});

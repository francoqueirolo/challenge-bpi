import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { IUser } from '../models/feature.models';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  let mockDataUserItem: IUser = {
    id: '1',
    name: 'Juan Perez',
    email: 'juanperez@nobody.com',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should get all users', () => {
    service.getAll().subscribe((data) => {
      expect(data).toEqual(mockDataUserItem);
    });
    const req = httpMock.expectOne(`${service.baseUrl}?idAuthor=1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockDataUserItem);
  });

  test('should create a user', () => {
    service.create(mockDataUserItem).subscribe((data) => {
      expect(data).toEqual(mockDataUserItem);
    });
    const req = httpMock.expectOne(service.baseUrl);
    expect(req.request.method).toBe('POST');
    req.flush(mockDataUserItem);
  });

  test('should update a user', () => {
    service.update(mockDataUserItem).subscribe((data) => {
      expect(data).toEqual(mockDataUserItem);
    });
    const req = httpMock.expectOne(
      `${service.baseUrl}${mockDataUserItem.id}`
    );
    expect(req.request.method).toBe('PUT');
    req.flush(mockDataUserItem);
  });

  test('should delete a user', () => {
    const mockId = '1';
    service.delete(mockId).subscribe((data) => {
      expect(data).toEqual(null);
    });
    const req = httpMock.expectOne(`${service.baseUrl}${mockId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});

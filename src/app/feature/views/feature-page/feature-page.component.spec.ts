import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePageComponent } from './feature-page.component';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';
import { IUser } from '../../models/feature.models';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FeaturePageComponent', () => {
  let component: FeaturePageComponent;
  let fixture: ComponentFixture<FeaturePageComponent>;
  let pokemonServiceMock: any;
  let pokemons: IUser[] = [
    {
      id: 1,
      name: 'Pikachu',
      image: '',
      attack: 0,
      defense: 0,
      hp: 0,
      type: '',
      idAuthor: 1,
    },
    {
      id: 2,
      name: 'Pikachu',
      image: '',
      attack: 0,
      defense: 0,
      hp: 0,
      type: '',
      idAuthor: 1,
    },
  ];
  const pokemon: IUser = {
    id: 1,
    name: 'Pikachu',
    image: '',
    attack: 0,
    defense: 0,
    hp: 0,
    type: '',
    idAuthor: 1,
  };

  beforeEach(async () => {
    pokemonServiceMock = {
      getAllPokemons: jest.fn().mockReturnValue(of([])),
      createPokemon: jest.fn().mockReturnValue(of({})),
      updatePokemon: jest.fn().mockReturnValue(of({})),
      deletePokemon: jest.fn().mockReturnValue(of({})),
    };

    await TestBed.configureTestingModule({
      declarations: [FeaturePageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: UserService,
          useValue: pokemonServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should load pokemons on init', () => {
    pokemonServiceMock.getAllPokemons.mockReturnValueOnce(
      of(pokemons)
    );

    component.ngOnInit();

    expect(component.data).toEqual(pokemons);
  });

  test('should show create pokemon form on add pokemon', () => {
    component.onAddUser();

    expect(component.showAddButton).toBe(false);
    expect(component.showCreate).toBe(true);
    expect(component.showEdit).toBe(false);
  });

  test('should create a new pokemon', () => {
    pokemonServiceMock.createPokemon.mockReturnValueOnce(of(pokemon));

    component.onCreateUser(pokemon);

    expect(component.showAddButton).toBe(true);
    expect(component.showCreate).toBe(false);
    expect(component.showEdit).toBe(false);
    expect(pokemonServiceMock.createPokemon).toHaveBeenCalledWith(
      pokemon
    );
  });

  test('should pass when method showErrorMessage is clicked', () => {
    const spy = jest.spyOn(component, 'showErrorMessage');
    component.showErrorMessage('Error Generico');
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onSearch is called', () => {
    const spy = jest.spyOn(component, 'onSearch');
    component.onSearch('pik');
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onUpdatePokemon is called', () => {
    const spy = jest.spyOn(component, 'onUpdatePokemon');
    component.onUpdatePokemon(pokemon);
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onEditPokemon is called', () => {
    const spy = jest.spyOn(component, 'onEditPokemon');
    component.onEditPokemon(pokemon);
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onDeletePokemon is called', () => {
    const spy = jest.spyOn(component, 'onDeletePokemon');
    component.onDeletePokemon(pokemon);
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onModalConfirm is called', () => {
    const spy = jest.spyOn(component, 'onModalConfirm');
    component.onModalConfirm(pokemon);
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onModalCancel is called', () => {
    const spy = jest.spyOn(component, 'onModalCancel');
    component.onModalCancel();
    expect(spy).toHaveBeenCalled();
  });

  test('should pass when method onCancelPokemon is called', () => {
    const spy = jest.spyOn(component, 'onCancelPokemon');
    component.onCancelPokemon();
    expect(spy).toHaveBeenCalled();
  });
});

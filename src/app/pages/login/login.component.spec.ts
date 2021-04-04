import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppComponent} from "../../app.component";

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import * as $ from "jquery";
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let app: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [AppComponent],
      imports: [FormsModule, AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    $('.username').text("Kerry");
  });

  it('should contain a login form', ()=>{
    expect($(fixture.nativeElement).find('form[name=loginForm]').length).toBe(1);
  });

  it('should contain the username field', ()=>{
    expect($(fixture.nativeElement).find('input#username').length).toBe(1);
  });

  it('should contain the password field', ()=>{
    expect($(fixture.nativeElement).find('input#password').length).toBe(1);
  });

  it("should have login form validations", ()=>{
    expect($(fixture.nativeElement).find('input#username').val()).toEqual("");
    expect($(fixture.nativeElement).find('input#password').val()).toEqual("");
    $(fixture.nativeElement).find('.login').trigger('click');
    expect($(fixture.nativeElement).find('.username-error-message').hasClass('dNone')).toBe(false);
    expect($(fixture.nativeElement).find('.username-error-message').text()).toEqual("Username cannot be empty");
    $(fixture.nativeElement).find('input#username').val("Kerry");
    $(fixture.nativeElement).find('.login').trigger('click');
    expect($(fixture.nativeElement).find('.username-error-message').hasClass('dNone')).toBe(false);
    expect($(fixture.nativeElement).find('.username-error-message').text()).toEqual("Username should have a valid email address");
    $(fixture.nativeElement).find('input#username').val("10536252@mydbs.ie");
    $(fixture.nativeElement).find('.login').trigger('click');
    expect($(fixture.nativeElement).find('.username-error-message').hasClass('dNone')).toBe(true);

  });
  it("should have login form validations for password", ()=>{

    expect($(fixture.nativeElement).find('.password-error-message').hasClass('dNone')).toBe(false);
    expect($(fixture.nativeElement).find('.password-error-message').text()).toEqual("Password cannot be empty");
  });

  it("login form should allow user to register", ()=>{
    expect($(fixture.nativeElement).find('input#username').val()).toEqual("");
    expect($(fixture.nativeElement).find('input#password').val()).toEqual("");
    $(fixture.nativeElement).find('.registerLink').trigger('click');
    expect($(fixture.nativeElement).find('.registerLink-error-message').hasClass('dNone')).toBe(true);

  });

});

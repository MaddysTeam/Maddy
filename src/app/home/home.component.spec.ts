import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { CardComponent } from 'app/shared/plugins/card/card.component';

// fixtuer 代表整个组件
let fixture: ComponentFixture<HomeComponent>;

describe('HomeComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent, CardComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HomeComponent);
    });

    // 这里测试home 组件的页面元素
    it('should have twelve cards', () => {
        fixture.detectChanges();
        const des = fixture.debugElement.queryAll(By.css('.card'));
        expect(des.length).toBe(12);
    });

    // 这里测试home 组件类内变量
    it('shold have title in componet file', () => {
        const des = fixture.componentInstance.title;
    });
});
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from 'src/app/app-routing.module';


@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule
    ],
    exports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule
    ]
})export class MaterialModule {}

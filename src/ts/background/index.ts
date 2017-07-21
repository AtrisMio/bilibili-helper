/*
 * @CreateTime: Mar 17, 2017 3:40 PM 
 * @Author: Ruo 
 * @Contact: undefined 
 * @Last Modified By: Ruo 
 * @Last Modified Time: Mar 17, 2017 3:40 PM 
 * @Description: Modify Here, Please  
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BHBackgroundService } from './background.service';
import { BHButtonModule, BHLoggerModule } from '../core';

@NgModule({
  imports: [
    BrowserModule,
    BHButtonModule,
    BHLoggerModule
  ],
  declarations: [],
  bootstrap: [],
  providers: [
    BHBackgroundService
  ]
}) export class BHBackgroundModule {
  constructor(private appService: BHBackgroundService) {
    this.appService.writeHeros();
  }
  ngDoBootstrap() { }
};
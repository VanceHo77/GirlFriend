import { Component, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Topic } from '../../interface/Topic';

/**
 * @title Menu with icons
 */
@Component({
    selector: 'dropdown-menu',
    inputs: ['topics'],
    templateUrl: 'dropdown.component.html',
    styleUrls: ['dropdown.component.css']
})
export class DropdownComponent {

    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

    @Input() topics: Topic[];

    //滑鼠移到上方自動打開Menu
    // @HostListener('mousemove', ['$event'])
    // onMousemove(event: MouseEvent) {
    //    this.trigger.openMenu();
    //}

}


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
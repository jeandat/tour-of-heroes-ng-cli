import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection:ChangeDetectionStrategy.OnPush,
    template:`
        <p>Manage your crises here</p>
      `
})
export class ManageCrisesComponent {
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */

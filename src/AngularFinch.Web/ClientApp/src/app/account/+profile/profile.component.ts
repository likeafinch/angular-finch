import { Component, ViewEncapsulation } from '@angular/core';

import { ProfileService } from './profile.service';

@Component({
    selector: 'appc-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.Native
})
export class ProfileComponent {
    menus = [
        { route: 'userinfo', text: 'User info' },
        { route: 'updatepassword', text: 'Update password' },
        { route: 'userphoto', text: 'User photo' },
        { route: 'otheraccounts', text: 'Other accounts' }
    ];

    constructor(public profileService: ProfileService) { }
}

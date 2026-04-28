import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-footer',
    imports: [
        RouterLink,
        TitleCasePipe
    ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
    currentYear: number = new Date().getFullYear();
}


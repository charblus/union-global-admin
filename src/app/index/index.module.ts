import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    IndexComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IndexModule { }

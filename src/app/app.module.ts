import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DirectivesComponent } from './directives/directives.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DirectivesComponent],
  imports: [BrowserModule, FormsModule,     RouterModule,
  ], // Add FormsModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

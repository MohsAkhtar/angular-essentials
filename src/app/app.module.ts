import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { StarWarsService } from './star-wars.service'; // injecting here gives one instance of dependency for whole app
import { LogService } from './log.service';
import { CreateCharacterComponent } from './create-character/create-character.component';

// services can only recieve other services as dependencies if you provide them in the app module
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule {}

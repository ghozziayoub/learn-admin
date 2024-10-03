import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { CategoriesService } from '../../categories.service';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, FooterComponent],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css',
})
export class CategoriesListComponent {
  categoriesList: any[] = [];

  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.getAllCategories().subscribe({
      next: (result) => {
        this.categoriesList = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

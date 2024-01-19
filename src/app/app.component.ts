import { ChangeDetectorRef, Component, ViewChild, ViewChildren } from '@angular/core';
import { NavItem } from './interface/nav-item';
import { MatMenuTrigger } from '@angular/material/menu';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';
  @ViewChildren(MatMenuTrigger) menuTriggers!: any;

  navItems: NavItem[] = [{
    displayName: 'Home',
    iconName: 'keyboard_arrow_down',
    children: [
      {
        displayName: 'Speakers',
        children: [
          {
            displayName: 'Michael Prentice',
            route: 'michael-prentice',
            children: [
              {
                displayName: 'Create Enterprise UIs',
                iconName: 'star_rate',
                route: 'material-design',
              }
            ]
          },
          {
            displayName: 'Stephen Fluin',
            route: 'stephen-fluin',
            children: [
              {
                displayName: 'What\'s up with the Web?',
                iconName: 'star_rate',
                route: 'what-up-web'
              }
            ]
          },
          {
            displayName: 'Mike Brocchi',
            route: 'mike-brocchi',
            children: [
              {
                displayName: 'My ally, the CLI',
                iconName: 'star_rate',
                route: 'my-ally-cli'
              },
              {
                displayName: 'Become an Angular Tailor',
                iconName: 'star_rate',
                route: 'become-angular-tailer'
              }
            ]
          }
        ]
      },
      {
        displayName: 'Sessions',
        children: [
          {
            displayName: 'Create Enterprise UIs',
            iconName: 'star_rate',
            route: 'material-design'
          },
          {
            displayName: 'What\'s up with the Web?',
            iconName: 'star_rate',
            route: 'what-up-web'
          },
          {
            displayName: 'My ally, the CLI',
            iconName: 'star_rate',
            route: 'my-ally-cli'
          },
          {
            displayName: 'Become an Angular Tailor',
            iconName: 'star_rate',
            route: 'become-angular-tailer'
          }
        ]
      },
      {
        displayName: 'Feedback',
        route: 'feedback'
      }
    ]
  },
  {
    displayName: 'Store',
    iconName: 'keyboard_arrow_down',
    children: [
      {
        displayName: 'Speakers',
        children: [
          {
            displayName: 'Michael Prentice',
            route: 'michael-prentice',
            children: [
              {
                displayName: 'Create Enterprise UIs',
                iconName: 'star_rate',
                route: 'material-design'
              }
            ]
          },
          {
            displayName: 'Stephen Fluin',
            route: 'stephen-fluin',
            children: [
              {
                displayName: 'What\'s up with the Web?',
                iconName: 'star_rate',
                route: 'what-up-web'
              }
            ]
          },
          {
            displayName: 'Mike Brocchi',
            route: 'mike-brocchi',
            children: [
              {
                displayName: 'My ally, the CLI',
                iconName: 'star_rate',
                route: 'my-ally-cli'
              },
              {
                displayName: 'Become an Angular Tailor',
                iconName: 'star_rate',
                route: 'become-angular-tailer'
              }
            ]
          }
        ]
      },
      {
        displayName: 'Sessions',
        children: [
          {
            displayName: 'Create Enterprise UIs',
            iconName: 'star_rate',
            route: 'material-design'
          },
          {
            displayName: 'What\'s up with the Web?',
            iconName: 'star_rate',
            route: 'what-up-web'
          },
          {
            displayName: 'My ally, the CLI',
            iconName: 'star_rate',
            route: 'my-ally-cli'
          },
          {
            displayName: 'Become an Angular Tailor',
            iconName: 'star_rate',
            route: 'become-angular-tailer'
          }
        ]
      },
      {
        displayName: 'Feedback',
        route: 'feedback'
      }
    ]
  },
  {
    displayName: 'Live TV',
    iconName: 'keyboard_arrow_down',
    children: [
      {
        displayName: 'Speakers',
        children: [
          {
            displayName: 'Michael Prentice',
            route: 'michael-prentice',
            children: [
              {
                displayName: 'Create Enterprise UIs',
                iconName: 'star_rate',
                route: 'material-design'
              }
            ]
          },
          {
            displayName: 'Stephen Fluin',
            route: 'stephen-fluin',
            children: [
              {
                displayName: 'What\'s up with the Web?',
                iconName: 'star_rate',
                route: 'what-up-web'
              }
            ]
          },
          {
            displayName: 'Mike Brocchi',
            route: 'mike-brocchi',
            children: [
              {
                displayName: 'My ally, the CLI',
                iconName: 'star_rate',
                route: 'my-ally-cli'
              },
              {
                displayName: 'Become an Angular Tailor',
                iconName: 'star_rate',
                route: 'become-angular-tailer'
              }
            ]
          }
        ]
      },
      {
        displayName: 'Sessions',
        children: [
          {
            displayName: 'Create Enterprise UIs',
            iconName: 'star_rate',
            route: 'material-design'
          },
          {
            displayName: 'What\'s up with the Web?',
            iconName: 'star_rate',
            route: 'what-up-web'
          },
          {
            displayName: 'My ally, the CLI',
            iconName: 'star_rate',
            route: 'my-ally-cli'
          },
          {
            displayName: 'Become an Angular Tailor',
            iconName: 'star_rate',
            route: 'become-angular-tailer'
          }
        ]
      },
      {
        displayName: 'Feedback',
        route: 'feedback'
      }
    ]
  },
  {
    displayName: 'Categoies',
    iconName: 'keyboard_arrow_down',
    heading: "Genres",
    additionalHeading: "Featured Collection",
    children: [
      {
        displayName: 'action',
        children: [
          {
            displayName: 'Michael Prentice',
            route: 'michael-prentice',
          },
          {
            displayName: 'Stephen Fluin',
            route: 'stephen-fluin',
          },
          {
            displayName: 'Mike Brocchi',
            route: 'mike-brocchi',
          }
        ]
      },
      {
        displayName: 'anime',
        route: 'anime'
      },
      {
        displayName: 'comedy',
        route: 'comedy'
      },
      {
        displayName: 'documentry',
        route: 'documentry'
      },
      {
        displayName: 'drama',
        route: 'drama'
      },
      {
        displayName: 'fantasy',
        route: 'fantasy'
      },
      {
        displayName: 'horror',
        route: 'horror'
      },
      {
        displayName: 'kids',
        route: 'kids'
      },
      {
        displayName: 'mystery and thrillers',
        route: 'mystery'
      },
      {
        displayName: 'romance',
        route: 'romance'
      },
      {
        displayName: 'science fiction',
        route: 'science'
      }
    ],
    additionalItems: [
      {
        displayName: 'hindi',
        route: 'hindi'
      },
      {
        displayName: 'english',
        route: 'english'
      },
      {
        displayName: 'telugu',
        route: 'telugu'
      },
      {
        displayName: 'tamil',
        route: 'tamil'
      },
      {
        displayName: 'malyalam',
        route: 'malyalam'
      },
      {
        displayName: 'kannada',
        route: 'kannada'
      },
      {
        displayName: 'marathi',
        route: 'marathi'
      },
      {
        displayName: 'punjabi',
        route: 'punjabi'
      },
      {
        displayName: 'gujarati',
        route: 'gujarati'
      },
      {
        displayName: 'bengali',
        route: 'bengali'
      }
    ]
  }
  ];

  recheckIfInMenu!: boolean;

  constructor(private cdr: ChangeDetectorRef, private http: HttpClient) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.recheckIfInMenu = false;
    this.getData('assets/mega_menu_data.json');
  }

  getData(fileName?: String): void {
    this.http.get(`../../${fileName}`).subscribe((res: any) => {
      console.log("🚀 --> AppComponent --> this.http.get --> res:", res);
      this.navItems = res?.megaMenuData || this.navItems;
      this.cdr.detectChanges();
    });
  }

  isMenuOpen(index: number): boolean {
    return this.menuTriggers?.['_results'][index]['menuOpen'] || false;
  }

}

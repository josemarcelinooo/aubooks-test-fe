import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Home',
        type: 'item',
        classes: 'nav-item',
        url: '/default',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'page',
    title: 'Authentication',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'login',
        title: 'Login',
        type: 'item',
        classes: 'nav-item',
        url: '/guest/login',
        breadcrumbs: false
      },
      {
        id: 'register',
        title: 'Register',
        type: 'item',
        classes: 'nav-item',
        url: '/guest/register',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'elements',
    title: 'Pages',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'typography',
        title: 'Customers',
        type: 'item',
        classes: 'nav-item',
        url: '/typography',
      },
      {
        id: 'color',
        title: 'Suppliers',
        type: 'item',
        classes: 'nav-item',
        url: '/color',
      },
      {
        id: 'color',
        title: 'Staff',
        type: 'item',
        classes: 'nav-item',
        url: '/color',
      },
      {
        id: 'color',
        title: 'Taxes',
        type: 'item',
        classes: 'nav-item',
        url: '/color',
      },
      {
        id: 'color',
        title: 'Upload',
        type: 'item',
        classes: 'nav-item',
        url: '/color',
      },
      {
        id: 'color',
        title: 'Inbox',
        type: 'item',
        classes: 'nav-item',
        url: '/color',
      },
      {
        id: 'color',
        title: 'Fins',
        type: 'item',
        classes: 'nav-item',
        url: '/color',
      },
      {
        id: 'color',
        title: 'Setup',
        type: 'item',
        classes: 'nav-item',
        url: '/color',
      },
      // {
      //   id: 'tabler',
      //   title: 'Tabler',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: 'https://tabler-icons.io/',
      //   icon: 'ti ti-plant-2',
      //   target: true,
      //   external: true
      // }
    ]
  },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'ti ti-brand-chrome'
  //     },
  //     {
  //       id: 'document',
  //       title: 'Document',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: 'https://codedthemes.gitbook.io/berry-angular/',
  //       icon: 'ti ti-vocabulary',
  //       target: true,
  //       external: true
  //     }
  //   ]
  // }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}

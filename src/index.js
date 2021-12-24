


export default class App {
  constructor() {
    this.createContent();
    this.createPages();
    //this.createNavigation();
  }
  async createNavigation() {
    const { default: Navigation } = await import('./components/Navigation');
    this.navigation = new Navigation({
      template: this.template,
    });
  }
  createContent() {
    this.template = document.querySelector('[data-template]').getAttribute('data-template');
  }

  async createPages() {
    const { default: Home } = await import('./pages/home');
    const { default: About } = await import('./pages/about');

  

    this.pages = {
      home: new Home(),
      about: new About(),
    };

    this.page = this.pages[this.template];
    this.page.create();
    this.page.init()
  }

  
}

  new App()


export default class App {
  constructor() {
    this.createContent();
    this.createPages();
    this.createNavigation();
    this.addLinkListeners();
    this.addEventListeners();
  }
  async createNavigation() {
    const { default: Navigation } = await import('./components/Navigation');
    this.navigation = new Navigation({
      template: this.template,
    });
  }
  createContent() {
    this.template = this.content.getAttribute('data-template');
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
  }

  /*onChange() {
      this.page.create();
      this.addLinkListeners();
  }

  addLinkListeners() {
      const links = document.querySelectorAll("a");
      each(links, (link) => {
          link.onclick = (event) => {
          this.onChange(href);
          };
      });

  }*/
}

import Page from '../../classes/Page';

export default class About extends Page {
  constructor() {
    super({
      id: 'about',
      element: '.p-about',
      elements: {},
    });
  }
  init(){
    console.log(this.element)
  }
}

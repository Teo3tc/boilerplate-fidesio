import Page from '../../classes/Page';
//import BlockAcordeon from "../../components/BlockAcordeon";
export default class Home extends Page {
  constructor() {
    super({
      id: 'home',
      element: '.p-home',
      elements: {},
    });
  }
  async init() {
    const { default: BlockAcordeon } = await import('../../components/BlockAcordeon');
    console.log(BlockAcordeon)
    new BlockAcordeon({});
  }
}

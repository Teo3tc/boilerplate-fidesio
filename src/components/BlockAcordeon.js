import Component from 'classes/Component';

export default class BlockAcordeon extends Component {
  constructor({ template }) {
    super({
      element: '.js-block__acordeon',
      elements: {
        items: '.js-block__acordeon__list__item',
      },
    });

    this.onChange(template);
  }

  onChange(template) {}
}

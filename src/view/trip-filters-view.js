import AbstractView from '../framework/view/abstract-view';
import { firstLetterUpperCase, getIsCheckedAttr, getIsDisabledAttr } from '../utils/common';
import { render } from '../framework/render';

const createFilterItemTemplate = (value, isChecked, isDisabled) => `
  <div class="trip-filters__filter">
    <input id="filter-${value}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter"
      value="${value}" ${getIsCheckedAttr(isChecked)} ${getIsDisabledAttr(isDisabled)}>
    <label class="trip-filters__filter-label" for="filter-${value}">${firstLetterUpperCase(value)}</label>
  </div>
`;

const createFiltersTemplate = (filters, currentFilter) => `
  <form class="trip-filters" action="#" method="get">
    ${filters.map((filter) => createFilterItemTemplate(filter, filter === currentFilter, false)).join('')}

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
`;

export default class TripFiltersView extends AbstractView {
  #filters = [];
  #currentFilter = '';
  #filterChangeHandler = null;

  constructor({filters, currentFilter, container, onFilterChange}) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilter;
    this.#filterChangeHandler = onFilterChange;
    this.element.addEventListener('change', this.#onFilterChange);
    render(this, container);
  }

  get template() {
    return createFiltersTemplate(this.#filters, this.#currentFilter);
  }

  removeElement() {
    this.element.removeEventListener('change', this.#onFilterChange);
    super.removeElement();
  }

  #onFilterChange = (evt) => {
    evt.preventDefault();
    this.#filterChangeHandler(evt.target.value.replace('filter-', ''));
  }
}

import AbstractView from '../framework/view/abstract-view';
import { firstLetterUpperCase } from '../utils';

const SORT_TYPES = ['day', 'event', 'time', 'price', 'offers'];

const createSortItemtemplate = (type) => `
  <div class="trip-sort__item  trip-sort__item--${type}">
    <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
    <label class="trip-sort__btn" for="sort-${type}">${firstLetterUpperCase(type)}</label>
  </div>
`;

const createFiltersTemplate = () => `
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${SORT_TYPES.map((type) => createSortItemtemplate(type)).join('')}
  </form>
`;

export default class TripSortView extends AbstractView {
  get template() {
    return createFiltersTemplate();
  }
}

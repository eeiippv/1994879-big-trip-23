import { render } from '../framework/render';
import { isEmpty } from '../view/utils/common';
import TripSortView from '../view/trip-sort-view';
import TripEventsView from '../view/trip-events-view';
import TripEmptyView from '../view/trip-empty-view';
import EventPresenter from './event-presenter';
import { updateItem } from './utils';

export default class TripPresenter {
  #model = null;
  #container = null;
  #tripEvents = [];
  #tripEventsView = new TripEventsView();
  #eventPresenters = new Map();

  constructor({ container, model }) {
    this.#container = container;
    this.#model = model;
  }

  init() {
    this.#tripEvents = [...this.#model.tripEvents];
    this.#clearTripEvents();
    this.#renderTripEvents();
  }

  #renderEmptyView() {
    render(
      new TripEmptyView({ filter: this.#model.filters[0] }),
      this.#container
    );
  }

  #renderSortView() {
    render(
      new TripSortView({
        sortTypes: this.#model.sortTypes,
        currentSortType: this.#model.sortTypes[0],
      }),
      this.#container
    );
  }

  #renderTripEvents() {
    if (isEmpty(this.#tripEvents)) {
      this.#renderEmptyView();
      return;
    }

    this.#renderSortView();
    render(this.#tripEventsView, this.#container);

    this.#tripEvents.forEach((tripEvent) => {
      const eventPresenter = new EventPresenter({
        model: this.#model,
        container: this.#tripEventsView.element,
        onTripEventChange: this.#onTripEventChange,
        onModeChange: this.#onTripEventModeChange,
      });
      eventPresenter.init(tripEvent);
      this.#eventPresenters.set(tripEvent.id, eventPresenter);
    });
  }

  #clearTripEvents() {
    this.#eventPresenters.forEach((eventPresenter) => eventPresenter.destroy());
    this.#eventPresenters.clear();
  }

  #onTripEventChange = (updatedTripEvent) => {
    this.#tripEvents = updateItem(this.#tripEvents, updatedTripEvent);
    this.#eventPresenters.get(updatedTripEvent.id).init(updatedTripEvent);
  }

  #onTripEventModeChange = () => this.#eventPresenters.forEach((presenter) => presenter.resetView());
}

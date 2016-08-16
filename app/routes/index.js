import Route from 'ember-route';
import RSVP from 'rsvp';

export default Route.extend({
  beforeModel() {
    console.log('app-index beforeModel');
  },
  model() {
    return new RSVP.Promise(resolve => {
      setTimeout(() => resolve(console.log('app-index model')), 1000);
    });
  },
  afterModel() {
    console.log('app-index afterModel');
  },

  setupController() {
    this._super(...arguments);
    console.log('app-index setupController');
  },
  resetController() {
    this._super(...arguments);
    console.log('app-index resetController');
  },

  activate() {
    console.log('app-index activate');
  },
  deactivate() {
    console.log('app-index deactivate');
  },

  actions: {
    refreshAppIndexModel() {
      console.log('app-index model refreshing');
      this.refresh();
    },
    didTransition() {
      console.log('app-index didTransition');
    },
    willTransition() {
      console.log('app-index willTransition');
    },
    error(error) {
      console.log('app-index error', error);
    },
    loading(transition) {
      console.log('app-index loading');
      transition.finally( () => console.log('app-index loading done') );
    }
  }
});

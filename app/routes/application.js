import Route from 'ember-route';
import RSVP from 'rsvp';

export default Route.extend({
  beforeModel() {
    console.log('app beforeModel');
  },
  model() {
    return new RSVP.Promise(resolve => {
      setTimeout(() => resolve(console.log('app model')), 1000);
    });
  },
  afterModel() {
    console.log('app afterModel');
  },

  setupController() {
    this._super(...arguments);
    console.log('app setupController');
  },
  resetController() {
    this._super(...arguments);
    console.log('app resetController');
  },

  activate() {
    console.log('app activate');
  },
  deactivate() {
    console.log('app deactivate');
  },

  actions: {
    refreshAppModel() {
      console.log('app model refreshing');
      this.refresh();
    },
    didTransition() {
      console.log('app didTransition');
    },
    willTransition() {
      console.log('app willTransition');
    },
    error(error) {
      console.log('app error', error);
    },
    loading(transition) {
      console.log('app loading');
      transition.finally( () => console.log('app loading done') );
    }
  }
});

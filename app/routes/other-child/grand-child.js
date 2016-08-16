import Route from 'ember-route';
import RSVP from 'rsvp';

export default Route.extend({
  beforeModel() {
    console.log('grand-child beforeModel');
  },
  model() {
    return new RSVP.Promise(resolve => {
      setTimeout(() => resolve(console.log('grand-child model')), 1000);
    });
  },
  afterModel() {
    console.log('grand-child afterModel');
  },

  setupController() {
    this._super(...arguments);
    console.log('grand-child setupController');
  },
  resetController() {
    this._super(...arguments);
    console.log('grand-child resetController');
  },

  activate() {
    console.log('grand-child activate');
  },
  deactivate() {
    console.log('grand-child deactivate');
  },

  actions: {
    refreshGrandChildModel() {
      console.log('grand-child model refreshing');
      this.refresh();
    },
    didTransition() {
      console.log('grand-child didTransition');
    },
    willTransition() {
      console.log('grand-child willTransition');
    },
    error(error) {
      console.log('grand-child error', error);
    },
    loading(transition) {
      console.log('grand-child loading');
      transition.finally( () => console.log('grand-child loading done') );
    }
  }
});

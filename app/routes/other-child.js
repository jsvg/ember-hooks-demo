import Route from 'ember-route';
import RSVP from 'rsvp';

export default Route.extend({
  beforeModel() {
    console.log('child-two beforeModel');
  },
  model() {
    return new RSVP.Promise(resolve => {
      setTimeout(() => resolve(console.log('child-two model')), 1000);
    });
  },
  afterModel() {
    console.log('child-two afterModel');
  },

  setupController() {
    this._super(...arguments);
    console.log('child-two setupController');
  },
  resetController() {
    this._super(...arguments);
    console.log('child-two resetController');
  },

  activate() {
    console.log('child-two activate');
  },
  deactivate() {
    console.log('child-two deactivate');
  },

  actions: {
    refreshModel() {
      console.log('child-two model refreshing');
      this.refresh();
    },
    didTransition() {
      console.log('child-two didTransition');
    },
    willTransition() {
      console.log('child-two willTransition');
    },
    error(error) {
      console.log('child-two error', error);
    },
    loading(transition) {
      console.log('child-two loading');
      transition.finally( () => console.log('child-two loading done') );
    }
  }
});

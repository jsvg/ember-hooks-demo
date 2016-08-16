import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('child');
  this.route('other-child', function() {
    this.route('grand-child');
  });
});

export default Router;

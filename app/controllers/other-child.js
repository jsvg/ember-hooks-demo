import Controller from 'ember-controller';
export default Controller.extend({
  queryParams: [
    'child-two-qp',
    'child-two-refresh-model-qp'
  ],
  'child-two-qp': false,
  'child-two-refresh-model-qp': false
});

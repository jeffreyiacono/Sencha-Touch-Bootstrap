/**
 * @class App.controller.Viewport
 * @extends Ext.app.Controller
 */
Ext.define('App.controller.Viewport', {
  extend: 'Ext.app.Controller',

  views: [
    'Viewport',
  ],

  refs: [
    {
      selector   : 'appviewport',
      xtype      : 'appviewport',
      ref        : 'viewport',
      autoCreate : true
    }
  ],

  init: function() {
    this.getViewport();
  },
});

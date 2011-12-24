Ext.define('App.view.Viewport', {
  extend: 'Ext.Container',
  xtype: 'appviewport',
  config: {
    layout           : 'fit',
    fullscreen       : true,
    scrollable       : 'vertical',
    styleHtmlContent : true,
    html             : '<div style="text-align:center"><h2>Hello Viewport</h2></div>'
  }
});

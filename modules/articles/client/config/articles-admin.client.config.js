﻿(function () {
  'use strict';

  // Configuring the Articles Admin module
  angular
    .module('articles.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Manage Notifications',
      state: 'admin.articles.list'
    });
  }
}());

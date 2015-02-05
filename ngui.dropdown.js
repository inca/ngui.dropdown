(function(window, document, undefined) {

  var module = angular.module('ngui.dropdown', []);

  module.directive('uiDropdown', function() {

    return {

      restrict: 'A',

      scope: true,

      controller: function() {

        var ctrl = this;

        ctrl.active = false;

        ctrl.toggle = function(ev) {
          ctrl.active = !ctrl.active;
          ev.stopPropagation();
        };

        ctrl.hide = function() {
          ctrl.active = false;
        };

      },

      controllerAs: 'dropdown',

      link: function($scope, $element, $attrs) {
        var $html = angular.element(document.documentElement);
        var ctrl = $scope.dropdown;

        var onClick = function(ev) {
          ctrl.hide();
          $scope.$digest();
        };

        var onKeyup = function(ev) {
          if (ev.keyCode != 27)
            return;
          ctrl.hide();
          $scope.$digest();
        };

        $html.on('click', onClick);
        $html.on('keyup', onKeyup);

        $element.on('$destroy', function() {
          $html.off('click', onClick);
          $html.off('keyup', onKeyup);
        });
      }
    }

  });

})(window, document);


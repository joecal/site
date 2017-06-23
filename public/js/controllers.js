'use strict'

angular.module('site')

  .controller('AppCtrl', ($rootScope, $scope, $timeout, mailFactory) => {

    $scope.getClass = () => {
      let classArray = ['color-0', 'color-1', 'color-2', 'color-3']

      function randomNoRepeats(array) {
        let copy = array.slice(0);
        return () => {
          if (copy.length < 1) {
            copy = array.slice(0);
          }
          let index = Math.floor(Math.random() * copy.length);
          let item = copy[index];
          copy.splice(index, 1);
          return item;
        };
      }
      let chooser = randomNoRepeats(classArray);
      return chooser()
    }

    $scope.form = {};

    $scope.formModel = {};

    let master = angular.copy($scope.formModel);

    $scope.cancel = () => {
      $rootScope.close = true;
      $timeout(() => {
        $rootScope.close = false
      }, 200);
      for (let i = 0; i < 3; i++) {
        $scope.blur(i)
      }
      $scope.formModel = angular.copy(master);
      $scope.form.mailForm.$setPristine();
    }

    $scope.focus = focus => {
      if (focus === 0) {
        $scope.focusInput0 = true;
      } else if (focus === 1) {
        $scope.focusInput1 = true;
      } else {
        $scope.focusInput2 = true;
      }

    }

    $scope.blur = blur => {
      if (blur === 0) {
        $scope.focusInput0 = false;
      } else if (blur === 1) {
        $scope.focusInput1 = false;
      } else {
        $scope.focusInput2 = false;
      }
    }

    $scope.sendMessage = (mailForm, formModel) => {
      if (mailForm.$valid) {
        $rootScope.close = true;
        $timeout(() => {
          $rootScope.close = false
        }, 200);
        $scope.sending = !$scope.sending;
        mailFactory.send(formModel).then(result => {
          $scope.cancel();
          if (result.success) {
            $scope.sending = !$scope.sending;
            $scope.sent = !$scope.sent;
            $timeout(() => {
              $scope.sent = !$scope.sent
            }, 5000);
          } else {
            $scope.sending = !$scope.sending;
            $scope.fail = !$scope.fail;
            $timeout(() => {
              $scope.fail = !$scope.fail
            }, 5000);
          }
        }).catch(error => {
          console.log(error)
          $scope.sending = !$scope.sending;
          $scope.fail = !$scope.fail;
          $timeout(() => {
            $scope.fail = !$scope.fail
          }, 5000);
          alert('Error: ' + error)
        });
      } else {
        for (let i = 0; i < 3; i++) {
          $scope.focus(i)
        }
        if (!$scope.invalid) {
          $scope.invalid = !$scope.invalid;
          $timeout(() => {
            $scope.invalid = !$scope.invalid
          }, 5000);
        }
      }
    };
  })

  .directive('slideable', () => {
    return {
      restrict: 'C',
      compile: (element, attr) => {
        let contents = element.html();
        element.html('<div class="slideable_content">' + contents + '</div>');
        return function postLink(scope, element, attrs) {
          attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
          attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
          element.css({
            'overflow': 'hidden',
            'height': '0px',
            'transitionProperty': 'height',
            'transitionDuration': attrs.duration,
            'transitionTimingFunction': attrs.easing
          });
        };
      }
    };
  })

  .directive('slideToggle', ($rootScope, $timeout) => {
    return {
      restrict: 'EA',
      link: (scope, element, attrs) => {
        element.bind('click', () => {
          let target = document.querySelectorAll('#mailContainer');
          let zeroTarget = target[0];
          let content = document.querySelectorAll('.slideable_content');
          let zeroContent = content[0];
          let style = zeroContent.style;
          let y = zeroTarget.style.height;
          $timeout(validity, 100)

          function validity() {
            if (y === '0px') {
              zeroTarget.style.height = '66vh';
            } else if (y === '66vh' && $rootScope.close === true) {
              zeroTarget.style.height = '0px';
            } else {
              return
            }
          }
        });
      }
    }
  });

angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.login', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu.recipejaz', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recipejaz.html',
        controller: 'recipejazCtrl'
      }
    }
  })

  .state('menu.home', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.jazFishandchip', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/jazFishandchip.html',
        controller: 'jazFishandchipCtrl'
      }
    }
  })

  .state('menu.westernCuisine', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/westernCuisine.html',
        controller: 'westernCuisineCtrl'
      }
    }
  })

  .state('menu.selfCreationRecipe', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/selfCreationRecipe.html',
        controller: 'selfCreationRecipeCtrl'
      }
    }
  })

  .state('menu.reviewsOnMarket', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reviewsOnMarket.html',
        controller: 'reviewsOnMarketCtrl'
      }
    }
  })

  .state('menu.jackieSReview', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/jackieSReview.html',
        controller: 'jackieSReviewCtrl'
      }
    }
  })

  .state('menu.shareYourMarket', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/shareYourMarket.html',
        controller: 'shareYourMarketCtrl'
      }
    }
  })

  .state('menu.reviewsOnMarkets', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reviewsOnMarkets.html',
        controller: 'reviewsOnMarketsCtrl'
      }
    }
  })

  .state('menu.myRewards', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myRewards.html',
        controller: 'myRewardsCtrl'
      }
    }
  })

  .state('shoppingRewards', {
    url: '/page15',
    templateUrl: 'templates/shoppingRewards.html',
    controller: 'shoppingRewardsCtrl'
  })

  .state('menu.foodRewards', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/foodRewards.html',
        controller: 'foodRewardsCtrl'
      }
    }
  })

  .state('menu.confirmation', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/confirmation.html',
        controller: 'confirmationCtrl'
      }
    }
  })

  .state('menu.rewards', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rewards.html',
        controller: 'rewardsCtrl'
      }
    }
  })

  .state('menu.grocerylist', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grocerylist.html',
        controller: 'grocerylistCtrl'
      }
    }
  })

  .state('menu.import', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/import.html',
        controller: 'importCtrl'
      }
    }
  })

  .state('menu.cartIngredients', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cartIngredients.html',
        controller: 'cartIngredientsCtrl'
      }
    }
  })

  .state('menu.cartIngredientsADD', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cartIngredientsADD.html',
        controller: 'cartIngredientsADDCtrl'
      }
    }
  })

  .state('menu.cart', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  .state('menu.owngrocery', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/owngrocery.html',
        controller: 'owngroceryCtrl'
      }
    }
  })

  .state('additem', {
    url: '/page26',
    templateUrl: 'templates/additem.html',
    controller: 'additemCtrl'
  })

  .state('menu.community', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/community.html',
        controller: 'communityCtrl'
      }
    }
  })

  .state('menu.comment', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/comment.html',
        controller: 'commentCtrl'
      }
    }
  })

  .state('menu.details', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/details.html',
        controller: 'detailsCtrl'
      }
    }
  })

  .state('menu.addPost', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addPost.html',
        controller: 'addPostCtrl'
      }
    }
  })

  .state('menu.jazselect', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/jazselect.html',
        controller: 'jazselectCtrl'
      }
    }
  })

  .state('menu.koufu', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/koufu.html',
        controller: 'koufuCtrl'
      }
    }
  })

  .state('page', {
    url: '/page35',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('menu.savePage', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/savePage.html',
        controller: 'savePageCtrl'
      }
    }
  })

  .state('menu.wantonNoodles', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wantonNoodles.html',
        controller: 'wantonNoodlesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page4')


});
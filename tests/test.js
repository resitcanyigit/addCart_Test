const home = require("../pages/home.js");
Feature('login');

Scenario('test something',  ({ I,homePage,searchPage }) => {
    homePage.homePage();
    homePage.closePopUp();
    homePage.acceptCookies();
    searchPage.searchKeyword();
    searchPage.addCart();
    searchPage.cartControl();
    
});

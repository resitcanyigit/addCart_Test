const { I } = inject();
module.exports = {
  fields: {},
  parameters:{  
    email:"fortestautomation21@gmail.com",
    password:"fortestautomation21"
},
  selects: {},
  buttons: {
    clickClosePopUp:".modal-close",
    cookiesAcceptBtn:"#onetrust-accept-btn-handler",
    
    
  },
  homePage:function(){
    //Siteye giriş
    I.amOnPage("https://www.trendyol.com/");
    I.wait(2);
  },
  closePopUp:function(){
    I.waitForElement("#gender-popup-modal");
    I.waitForClickable(this.buttons.clickClosePopUp);
    I.click(this.buttons.clickClosePopUp);
    I.wait(2);
  },
  acceptCookies:function(){
    I.waitForClickable(this.buttons.cookiesAcceptBtn);
    I.click(this.buttons.cookiesAcceptBtn);
    I.wait(2);
   

  },

}
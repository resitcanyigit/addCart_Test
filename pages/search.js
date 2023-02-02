const { I } = inject();
module.exports = {
  fields: {},
  parameters:{},
  selects: {},
  text:{
    searchedKeyword:"//h1[contains(text(),'laptop')]"
  },
  buttons: {
    searchBtn:".cyrzo7gC",
    addCartBtn:".add-to-basket",
    clickProduct:"(//*[contains(@class,'p-card-wrppr')])[1]"
  },
searchKeyword:function(){
    I.fillField(".V8wbcUhU","laptop");
    I.waitForClickable(this.buttons.searchBtn);
    I.click(this.buttons.searchBtn);
    I.waitForClickable(this.buttons.clickProduct);
    I.click(this.buttons.clickProduct);
    I.wait(1);
},
addCart:function(){
    I.switchToNextTab();
    I.waitForClickable(this.buttons.addCartBtn);
    I.click(this.buttons.addCartBtn);
    I.wait(2);
},
cartControl:function(){
    I.see('1', '.basket-item-count-container');
    I.wait(1);
    
}
}
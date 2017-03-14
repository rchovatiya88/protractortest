describe("Test the Firelab applicaiton", function(){

  it("Go to the Home page and login", function(){

    browser.get("http://beta.firelabinc.com/");
    element(by.model('vm.user.login')).sendKeys('rchovatiya88@gmail.com');
    element(by.model('vm.user.password')).sendKeys('Gorilla');
   
    login_btn = element(by.css('.btn-lg'));
  })
})

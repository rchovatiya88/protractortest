describe('FireLab website login', function() {
  it('should do login', function() {
    browser.get('http://beta.firelabinc.com/');

    element(by.model('vm.user.login')).sendKeys('rchovatiya88@gmail.com');
    element(by.model('vm.user.password')).sendKeys('Gorilla');
    login_btn = element(by.css('.btn-lg'));

    login_btn.click().then(function() {
      add_cust_btn = element(by.css('.btn-success'));
      add_cust_btn.click();
    });

    return browser.driver.wait(function() {
       return browser.driver.getCurrentUrl().then(function(url) {
           //return (/customers/).test(url);
       });
    }, 10000);
  });
});

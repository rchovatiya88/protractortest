// The goal for the test to check key user flows

// User Login 
// Add Customer
// Add Employee
// spec.js
describe('Firelab App', function() {
//  var addNewCustomerButton = element(by.css('.btn'));

  beforeEach(function() {
    browser.get('http://beta.firelabinc.com');
  });

  it('Go to the Home page and login', function() {
    element(by.model('vm.user.login')).sendKeys('rchovatiya88@gmail.com');
    element(by.model('vm.user.password')).sendKeys('Gorilla');
    login_btn = element(by.css('.btn-lg'));
  });

  it('Verify Login is Successful', function() {
    
  });
  it('Add a Customer', function() {
    element(by.css('vm.createCustomer()')).click();
  });
});


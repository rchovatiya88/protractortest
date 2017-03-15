  /**
       * In this Test Case we will test the Home Page is up 
       * and click on all the links. 
       */

describe("Go to the Homepage ", function(){

  it("Go to the Home page ", function(){

    browser.get("");
    console.log("Home Page Open succesffully")
   });
// From the Home Page go to the other links
   it("Go to About Page ", function(){
    var about = element(by.css(""));
    about.click();
    browser.sleep(5000)
    console.log("Able to go to about page");
   });
   it("Go Back the Home page ", function(){
    browser.get("");
    console.log("Home Page Open succesffully")
   });

});


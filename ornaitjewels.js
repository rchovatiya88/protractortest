
describe("Go to the Homepage ", function(){
 browser.ignoreSynchronization=true;
   it("Go to the Home page ", function(){
    browser.get("http://ornaitjewels.com/");
    console.log("Home Page Open succesffully")
   });
    // From the Home Page go to the Contact Page 
   it("Go to Pendants Page ", function(){
    var pendants = element(by.css("#tm_menu > div > ul > li:nth-child(2) > a"));
    pendants.click();
    browser.sleep(2000)
    console.log("From the Home Page go to the Pendant Page ");
    element(by.css("#content > div:nth-child(2) > div:nth-child(1) > div.product-thumb.transition.options > div.caption > div > a")).click(); // Enter Name
     browser.sleep(2000)
    browser.navigate().back();
   });

});


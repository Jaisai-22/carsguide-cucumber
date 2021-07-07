package com.carsguide.cucumber.stepdefs;

import com.carsguide.pages.HomePage;
import com.carsguide.pages.NewAndUsedCarPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class CarBuyTest {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I mouse hover on “buy\\+sell” tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().mouseHoverOnBuyAndSellLink();

    }

    @And("^I click Search Cars$")
    public void iClickSearchCars() {
        new HomePage().clickOnSearchCarsLink();

    }

    @Then("^I navigate to new and used car search page$")
    public void iNavigateToNewAndUsedCarSearchPage() {
        String actualTextMessage = "New & Used Car Search - carsguide";
        String exptectedMesage = new NewAndUsedCarPage().verifyUserNavigateToNewAndUsedCarPage();
        Assert.assertEquals(actualTextMessage, exptectedMesage);

    }


    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make) throws InterruptedException {
        Thread.sleep(1000);
        new NewAndUsedCarPage().selectAnyMake(make);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model) throws InterruptedException {
        Thread.sleep(1000);
        new NewAndUsedCarPage().selectAnyModel(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location) throws InterruptedException {
        Thread.sleep(1000);
        new NewAndUsedCarPage().selectAnyLocation(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) throws InterruptedException {
        Thread.sleep(500);
        new NewAndUsedCarPage().selectPriceForCar(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() throws InterruptedException {
        Thread.sleep(1000);
        new NewAndUsedCarPage().clickOnFindMyCarButton();

    }


    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String make) {
        Assert.assertTrue(make,new NewAndUsedCarPage().getSearchTextFromProduct().contains(make));


    }
}
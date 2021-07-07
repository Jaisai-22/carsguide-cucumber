package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class NewAndUsedCarPage extends Utility {

    private static final Logger log = LogManager.getLogger(NewAndUsedCarPage.class.getName());


    @FindBy(xpath = "//h1[contains(text(),'New & Used Car Search - carsguide')]")
    WebElement verifyText;

    @FindBy(xpath = "//select[@id='makes']")
    WebElement anyMake;

    @FindBy(xpath = "//select[@id='models']")
    WebElement anyModel;

    @FindBy(xpath = "//select[@id='locations']")
    WebElement anyLocation;

    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement carPrice;

    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findMyNextCar;

    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement searchTitleText;


    public String verifyUserNavigateToNewAndUsedCarPage() {
        log.info("Verify that user navigate to new and Used car page :" +verifyText.toString());
        return getTextFromElement(verifyText);
    }

    public void selectAnyMake(String make) {
        mouseHoverToElement(anyMake);
        selectByVisibleTextFromDropDown(anyMake, make);
        log.info("Select any make form drop down : " +anyMake.toString());
    }

    public void selectAnyModel(String model) {
        mouseHoverToElement(anyModel);
        selectByVisibleTextFromDropDown(anyModel, model);
        log.info("Select any model from dropdown : " +anyModel.toString());
    }

    public void selectAnyLocation(String location) {
        mouseHoverToElement(anyLocation);
        selectByVisibleTextFromDropDown(anyLocation, location);
        log.info("Select any Location from drop down: " +anyLocation.toString());

    }

    public void selectPriceForCar(String price) {
        mouseHoverToElement(carPrice);
        selectByVisibleTextFromDropDown(carPrice, price);
        log.info("Select Price from drop down: " +carPrice.toString());
    }

    public void clickOnFindMyCarButton() {
        clickOnElement(findMyNextCar);
        log.info("Click on find my car button : " +findMyNextCar.toString());
    }

    public String getSearchTextFromProduct(){
        log.info("Verify Product Navigation Page: "+searchTitleText.toString());
        return searchTitleText.getText();

    }

}

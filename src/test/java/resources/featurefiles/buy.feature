Feature: Search Functionality
@Sanity,@Smoke,@Regression
  Scenario Outline:  Search the buy car with model
    Given I am on home page
    When I mouse hover on “buy+sell” tab
    And I click Search Cars
    Then I navigate to new and used car search page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results


    Examples:


      | make          | model   | location            | price    |
      | Honda         | City    | NSW - Central Coast | $90,000  |
      | Mazda         | BT-50   | NSW - New England   | $60,000  |
      | Hyundai       | Elantra | NT - North          | $80,000  |
      | Kia           | Picanto | NSW - Sydney        | $90,000  |
      | Mercedes-Benz | A-Class | NSW - All           | $150,000 |
      | Ford          | Focus   | NSW - New England   | $70,000  |

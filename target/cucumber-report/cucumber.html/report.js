$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Honda",
        "City",
        "NSW - Central Coast",
        "$90,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Mazda",
        "BT-50",
        "NSW - New England",
        "$60,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Hyundai",
        "Elantra",
        "NT - North",
        "$80,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Kia",
        "Picanto",
        "NSW - Sydney",
        "$90,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Mercedes-Benz",
        "A-Class",
        "NSW - All",
        "$150,000"
      ],
      "line": 24,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Ford",
        "Focus",
        "NSW - New England",
        "$70,000"
      ],
      "line": 25,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 17766797300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"City\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - Central Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuyTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 785735800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 321364600,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iClickSearchCars()"
});
formatter.result({
  "duration": 4240300400,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 194665100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "CarBuyTest.iSelectMake(String)"
});
formatter.result({
  "duration": 1433753400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 16
    }
  ],
  "location": "CarBuyTest.iSelectModel(String)"
});
formatter.result({
  "duration": 1429904600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central Coast",
      "offset": 19
    }
  ],
  "location": "CarBuyTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 1488198600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "CarBuyTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 954624700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 25030659400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "CarBuyTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 68886200,
  "status": "passed"
});
formatter.after({
  "duration": 1067465500,
  "status": "passed"
});
formatter.before({
  "duration": 9368418100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Mazda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"BT-50\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - New England\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Mazda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuyTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 35000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1518004400,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iClickSearchCars()"
});
formatter.result({
  "duration": 4188611800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 76021000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 15
    }
  ],
  "location": "CarBuyTest.iSelectMake(String)"
});
formatter.result({
  "duration": 1427381900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BT-50",
      "offset": 16
    }
  ],
  "location": "CarBuyTest.iSelectModel(String)"
});
formatter.result({
  "duration": 1451039800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - New England",
      "offset": 19
    }
  ],
  "location": "CarBuyTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 1460229200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "CarBuyTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 889049900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 29006128000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 23
    }
  ],
  "location": "CarBuyTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 84804500,
  "status": "passed"
});
formatter.after({
  "duration": 1060055900,
  "status": "passed"
});
formatter.before({
  "duration": 10330378600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Hyundai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Elantra\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NT - North\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Hyundai\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuyTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 41900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 345936000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iClickSearchCars()"
});
formatter.result({
  "duration": 4049892100,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 108713600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 15
    }
  ],
  "location": "CarBuyTest.iSelectMake(String)"
});
formatter.result({
  "duration": 1418099300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elantra",
      "offset": 16
    }
  ],
  "location": "CarBuyTest.iSelectModel(String)"
});
formatter.result({
  "duration": 1402934000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - North",
      "offset": 19
    }
  ],
  "location": "CarBuyTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 1677137800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "CarBuyTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 861851900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 23336783500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 23
    }
  ],
  "location": "CarBuyTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 97242800,
  "status": "passed"
});
formatter.after({
  "duration": 1116454200,
  "status": "passed"
});
formatter.before({
  "duration": 10276514800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Picanto\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuyTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 50200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 311008800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iClickSearchCars()"
});
formatter.result({
  "duration": 3176561700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 241830100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "CarBuyTest.iSelectMake(String)"
});
formatter.result({
  "duration": 1382899900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Picanto",
      "offset": 16
    }
  ],
  "location": "CarBuyTest.iSelectModel(String)"
});
formatter.result({
  "duration": 1407275000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "CarBuyTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 1406322800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "CarBuyTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 1005011100,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 23488230500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "CarBuyTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 59926200,
  "status": "passed"
});
formatter.after({
  "duration": 1061477200,
  "status": "passed"
});
formatter.before({
  "duration": 9889686700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Mercedes-Benz\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"A-Class\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$150,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Mercedes-Benz\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuyTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 43200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 311943000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iClickSearchCars()"
});
formatter.result({
  "duration": 3802238900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 80861600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 15
    }
  ],
  "location": "CarBuyTest.iSelectMake(String)"
});
formatter.result({
  "duration": 1417298100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A-Class",
      "offset": 16
    }
  ],
  "location": "CarBuyTest.iSelectModel(String)"
});
formatter.result({
  "duration": 1418842300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "CarBuyTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 1456688300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$150,000",
      "offset": 16
    }
  ],
  "location": "CarBuyTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 986012300,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 26046105300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 23
    }
  ],
  "location": "CarBuyTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 63770400,
  "status": "passed"
});
formatter.after({
  "duration": 1048290100,
  "status": "passed"
});
formatter.before({
  "duration": 9825815300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Focus\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - New England\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$70,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Ford\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuyTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 38200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 290989600,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iClickSearchCars()"
});
formatter.result({
  "duration": 3718897600,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 77582100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "CarBuyTest.iSelectMake(String)"
});
formatter.result({
  "duration": 1362437900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Focus",
      "offset": 16
    }
  ],
  "location": "CarBuyTest.iSelectModel(String)"
});
formatter.result({
  "duration": 1427580800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - New England",
      "offset": 19
    }
  ],
  "location": "CarBuyTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 1507891600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$70,000",
      "offset": 16
    }
  ],
  "location": "CarBuyTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 922783100,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 26681355900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "CarBuyTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 79243600,
  "status": "passed"
});
formatter.after({
  "duration": 1038783500,
  "status": "passed"
});
});
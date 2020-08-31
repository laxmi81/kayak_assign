$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("kayak_new.feature");
formatter.feature({
  "line": 1,
  "name": "kayak.com testcases for flight booking",
  "description": "",
  "id": "kayak.com-testcases-for-flight-booking",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "verify origin and destination cities",
  "description": "",
  "id": "kayak.com-testcases-for-flight-booking;verify-origin-and-destination-cities",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "kayak site is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "close the default button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select origin airport \"\u003corigin\u003e\" city",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on destination button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter destination airport \"\u003cdestination\u003e\" city",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on calendar",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "select departure date",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select return date",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "serach results appear",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "quit browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "kayak.com-testcases-for-flight-booking;verify-origin-and-destination-cities;",
  "rows": [
    {
      "cells": [
        "origin",
        "destination"
      ],
      "line": 18,
      "id": "kayak.com-testcases-for-flight-booking;verify-origin-and-destination-cities;;1"
    },
    {
      "cells": [
        "denver",
        "chicago"
      ],
      "line": 19,
      "id": "kayak.com-testcases-for-flight-booking;verify-origin-and-destination-cities;;2"
    },
    {
      "cells": [
        "tampa",
        "dallas"
      ],
      "line": 20,
      "id": "kayak.com-testcases-for-flight-booking;verify-origin-and-destination-cities;;3"
    },
    {
      "cells": [
        "boston",
        "Atlanta"
      ],
      "line": 21,
      "id": "kayak.com-testcases-for-flight-booking;verify-origin-and-destination-cities;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7771740300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "verify origin and destination cities",
  "description": "",
  "id": "kayak.com-testcases-for-flight-booking;verify-origin-and-destination-cities;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "kayak site is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "close the default button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select origin airport \"denver\" city",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on destination button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter destination airport \"chicago\" city",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on calendar",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "select departure date",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select return date",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "serach results appear",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "quit browser",
  "keyword": "Then "
});
formatter.match({
  "location": "test1.kayak_site_is_launched()"
});
formatter.result({
  "duration": 3093388400,
  "status": "passed"
});
formatter.match({
  "location": "test1.close_the_default_button()"
});
formatter.result({
  "duration": 3314223400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "denver",
      "offset": 23
    }
  ],
  "location": "test1.select_origin_airport_city(String)"
});
formatter.result({
  "duration": 540724400,
  "status": "passed"
});
formatter.match({
  "location": "test1.click_on_destination_button()"
});
formatter.result({
  "duration": 355889800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chicago",
      "offset": 27
    }
  ],
  "location": "test1.enter_destination_airport_city(String)"
});
formatter.result({
  "duration": 1075707300,
  "status": "passed"
});
formatter.match({
  "location": "test1.click_on_calendar()"
});
formatter.result({
  "duration": 441500500,
  "status": "passed"
});
formatter.match({
  "location": "test1.select_departure_date()"
});
formatter.result({
  "duration": 1053572100,
  "status": "passed"
});
formatter.match({
  "location": "test1.user_select_return_date()"
});
formatter.result({
  "duration": 527100100,
  "status": "passed"
});
formatter.match({
  "location": "test1.user_click_on_search_button()"
});
formatter.result({
  "duration": 297137400,
  "status": "passed"
});
formatter.match({
  "location": "test1.serach_results_appear()"
});
formatter.result({
  "duration": 68800,
  "status": "passed"
});
formatter.match({
  "location": "test1.quit_browser()"
});
formatter.result({
  "duration": 63100,
  "status": "passed"
});
formatter.after({
  "duration": 1515136100,
  "status": "passed"
});
formatter.before({
  "duration": 5671581000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verify origin and destination cities",
  "description": "",
  "id": "kayak.com-testcases-for-flight-booking;verify-origin-and-destination-cities;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "kayak site is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "close the default button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select origin airport \"tampa\" city",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on destination button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter destination airport \"dallas\" city",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on calendar",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "select departure date",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select return date",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "serach results appear",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "quit browser",
  "keyword": "Then "
});
formatter.match({
  "location": "test1.kayak_site_is_launched()"
});
formatter.result({
  "duration": 3868796400,
  "status": "passed"
});
formatter.match({
  "location": "test1.close_the_default_button()"
});
formatter.result({
  "duration": 4574530700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tampa",
      "offset": 23
    }
  ],
  "location": "test1.select_origin_airport_city(String)"
});
formatter.result({
  "duration": 617162400,
  "status": "passed"
});
formatter.match({
  "location": "test1.click_on_destination_button()"
});
formatter.result({
  "duration": 424534200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dallas",
      "offset": 27
    }
  ],
  "location": "test1.enter_destination_airport_city(String)"
});
formatter.result({
  "duration": 891166700,
  "status": "passed"
});
formatter.match({
  "location": "test1.click_on_calendar()"
});
formatter.result({
  "duration": 372737700,
  "status": "passed"
});
formatter.match({
  "location": "test1.select_departure_date()"
});
formatter.result({
  "duration": 1036030600,
  "status": "passed"
});
formatter.match({
  "location": "test1.user_select_return_date()"
});
formatter.result({
  "duration": 503282900,
  "status": "passed"
});
formatter.match({
  "location": "test1.user_click_on_search_button()"
});
formatter.result({
  "duration": 358166200,
  "status": "passed"
});
formatter.match({
  "location": "test1.serach_results_appear()"
});
formatter.result({
  "duration": 52600,
  "status": "passed"
});
formatter.match({
  "location": "test1.quit_browser()"
});
formatter.result({
  "duration": 51600,
  "status": "passed"
});
formatter.after({
  "duration": 878797800,
  "status": "passed"
});
formatter.before({
  "duration": 5715954700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify origin and destination cities",
  "description": "",
  "id": "kayak.com-testcases-for-flight-booking;verify-origin-and-destination-cities;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "kayak site is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "close the default button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select origin airport \"boston\" city",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on destination button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter destination airport \"Atlanta\" city",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on calendar",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "select departure date",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select return date",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "serach results appear",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "quit browser",
  "keyword": "Then "
});
formatter.match({
  "location": "test1.kayak_site_is_launched()"
});
formatter.result({
  "duration": 3347967600,
  "status": "passed"
});
formatter.match({
  "location": "test1.close_the_default_button()"
});
formatter.result({
  "duration": 2518940400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "boston",
      "offset": 23
    }
  ],
  "location": "test1.select_origin_airport_city(String)"
});
formatter.result({
  "duration": 500118500,
  "status": "passed"
});
formatter.match({
  "location": "test1.click_on_destination_button()"
});
formatter.result({
  "duration": 338578400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Atlanta",
      "offset": 27
    }
  ],
  "location": "test1.enter_destination_airport_city(String)"
});
formatter.result({
  "duration": 1051885700,
  "status": "passed"
});
formatter.match({
  "location": "test1.click_on_calendar()"
});
formatter.result({
  "duration": 443841200,
  "status": "passed"
});
formatter.match({
  "location": "test1.select_departure_date()"
});
formatter.result({
  "duration": 1028198100,
  "status": "passed"
});
formatter.match({
  "location": "test1.user_select_return_date()"
});
formatter.result({
  "duration": 447470700,
  "status": "passed"
});
formatter.match({
  "location": "test1.user_click_on_search_button()"
});
formatter.result({
  "duration": 253274200,
  "status": "passed"
});
formatter.match({
  "location": "test1.serach_results_appear()"
});
formatter.result({
  "duration": 85600,
  "status": "passed"
});
formatter.match({
  "location": "test1.quit_browser()"
});
formatter.result({
  "duration": 67900,
  "status": "passed"
});
formatter.after({
  "duration": 1031491500,
  "status": "passed"
});
});
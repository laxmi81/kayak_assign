Feature: kayak.com testcases for flight booking

Scenario Outline: verify origin and destination cities

Given kayak site is launched
When close the default button
Then select origin airport "<origin>" city
When click on destination button
And enter destination airport "<destination>" city
When click on calendar
And select departure date
And user select return date
Then user click on search button
And serach results appear
Then quit browser

Examples:
|origin     |destination    |
|denver     |chicago        |
|tampa	    |dallas         |
|boston     |Atlanta        |

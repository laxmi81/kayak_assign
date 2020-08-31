package com.kayak.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="FeatureFiles",glue= {"stepDefinition"},
                plugin= {"html:target/cucumber-html-report"},
                monochrome=true
                //strict=true
                		 

)
public class runner {

}

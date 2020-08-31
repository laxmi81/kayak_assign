package stepDefinition;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;


import Page_elements.Web_pageElements;

import Utility_classes.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class test1 extends TestBase {
	
	private static Logger log=LogManager.getLogger(Web_pageElements.class);
	Web_pageElements element=new Web_pageElements(TestBase.driver);
	
	private TestBase base;
	public test1(TestBase base)
	{
		this.base=base;
	}
	@Given("^kayak site is launched$")
	public void kayak_site_is_launched()  {
	   log.info("kayak site lauched");
		TestBase.driver.get(base.baseURL);
		
	}
	@When("^close the default button$")
	public void close_the_default_button() throws Throwable {
		System.out.println("close_the_default_button");
		log.info("click on cross button");
		element.close_the_default_button_1();
	}
	@Then("^select origin airport \"([^\"]*)\" city$")
	public void select_origin_airport_city(String arg1) throws Throwable {
		log.info("select origin city");
		element.select_origin_airport_city_1(arg1);
	    
	}
	

	@When("^click on destination button$")
	public void click_on_destination_button() throws Throwable {
		log.info("select destination city");
		element.click_on_destination_button_1();
	    
	}
@When("^enter destination airport \"([^\"]*)\" city$")
	
	public void enter_destination_airport_city(String arg1) throws Throwable {
	log.info("enter destination airport");
	element.enter_destination_airport_city_1(arg1);
	   
	}

	

	@When("^click on calendar$")
	public void click_on_calendar() throws Throwable {
		log.info("click on calendar");
		element.click_on_calendar_1();
	    
	}

	@When("^select departure date$")
	public void select_departure_date() throws Throwable {
		log.info("select departure date");
		element.select_departure_date_1();
	   
	}

	@When("^user select return date$")
	public void user_select_return_date() throws Throwable {
		log.info("select return date");
		element.user_select_return_date_1();
	   
	}

	@Then("^user click on search button$")
	public void user_click_on_search_button() throws Throwable {
		log.info("click on search butoon");
		element.user_click_on_search_button_1();
	    
	}

	@Then("^serach results appear$")
	public void serach_results_appear() throws Throwable {
		log.info("search result displays");
		element.serach_results_appear_1();
	    
	}

	@Then("^quit browser$")
	public void quit_browser() throws Throwable {
		log.info("quit the browser");
		
	   
	}
	
	

	
	

}

package Page_elements;

import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Utility_classes.TestBase;

public class Web_pageElements extends TestBase{
	
	private static Logger log=LogManager.getLogger(Web_pageElements.class);
	
public Web_pageElements(WebDriver driver)
{
	System.out.println("driver"+driver);
	TestBase.driver=driver;
	PageFactory.initElements(driver, this);
}

@FindBy(xpath="//*[contains(@id, 'origin-airport-display')]")
List<WebElement> origin;


@FindBy(xpath="//*[contains(@class, 'Button-No-Standard-Style js-remove-selection')]")
List<WebElement> editCrossMark;

public void close_the_default_button_1() throws InterruptedException
{
	
	TestBase.waitElement(origin.get(0));
	log.info("find origin city box to enter");
	origin.get(0).click();
	log.info("click on cross button");
	Thread.sleep(1000);
	editCrossMark.get(2).click();
	
}

@FindBy(xpath="//*[contains(@id,'origin-airport')]")
List<WebElement> origin_city;


@FindBy(xpath="//li[@role='option'][@tabindex='0']")
List<WebElement> from_sel;



public void select_origin_airport_city_1(String arg1) throws Exception 
{
	
	TestBase.waitElement(origin_city.get(11));
	log.info("enter origin city");
	origin_city.get(11).sendKeys(arg1);
	log.info("select option of airport");
	//TestBase.waitElement(from_sel.get(0));
	from_sel.get(0).click();
}

@FindBy(xpath="//*[contains(@id,'destination-airport-display')][@data-placeholder='To?']")
WebElement destination;

@FindBy(xpath="//*[contains(@id,'destination-airport')][@placeholder='To?']")
WebElement Destination_city;

@FindBy(xpath="//li[@role='option'][@tabindex='0']/div[@class='smarty-icon-wrapper']")
List<WebElement> destination_sel;

public void click_on_destination_button_1()
{
	TestBase.waitElement(destination);
	log.info("click on destination button");
	destination.click();
}


public void enter_destination_airport_city_1(String arg1) throws Exception
{
	TestBase.waitElement(Destination_city);
	log.info("enter destination city");
	Destination_city.sendKeys(arg1);
	
	//estBase.waitElement(destination_sel.get(0));
	log.info("select destination airport");
	destination_sel.get(0).click();
	
	
}


@FindBy(xpath="//*[contains(@class,'_iaf _iEU _iam _iai')]")
List<WebElement> cal_start;
@FindBy (xpath="//*[contains(@class,'keel-grid _ib1')][5]/div[7]")
WebElement select_start_date;

public void click_on_calendar_1() throws Exception
{
	log.info("click on calendar");
  TestBase.waitElement(cal_start.get(0));
	cal_start.get(0).click();
	//Thread.sleep(1000);
}
public void select_departure_date_1() throws Exception
{
	TestBase.waitElement(select_start_date);
	log.info("select start date");
	select_start_date.click();
	
	select_start_date.click();
	
}

@FindBy (xpath="//*[@id=\"stl-jam-cal-202009\"]/div[1]/div[3]/div[5]/div[3]")
WebElement select_end_date;
@FindBy (xpath="//*[contains(@class,'keel-grid _ib1')][4]/div[6]")
List<WebElement> end_start;



@FindBy(xpath="//*[contains(@id,'submit')]")
List<WebElement> search_btn;
public void user_click_on_search_button_1()
{
	TestBase.waitElement(search_btn.get(0));
	   log.info("click on submit button");
	   search_btn.get(0).click();
}
@FindBy(xpath="//*[contains(text(),'Continue to flights')]")
WebElement countinue_btn;

public void serach_results_appear_1()  {
   
  
   log.info("click on contonue button");
   
}

@FindBy(xpath="//*[@id=\"XYpJ-airports-section-airports-2363-RFD-price\"]")
WebElement flight_sel;
public void quit_browser_1() 
{
    log.info("select a flight");
   TestBase.waitElement(flight_sel);
    flight_sel.click();
    
}





public void user_select_return_date_1() throws InterruptedException 
{
	
	log.info("select depart date from calendar");
	TestBase.waitElement(select_end_date);
	select_end_date.click();
	log.info("click on date");
	//TestBase.waitElement(end_start.get(2));
	end_start.get(2).click();
	
}



}

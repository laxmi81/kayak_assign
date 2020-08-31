package Utility_classes;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class TestBase {
			
		
		/*public static Common_utility common=new Common_utility();
		public static Browser_utility browser=new Browser_utility();*/
	
		//private static Logger log=LogManager.getLogger(TestBase.class);
					
		
		public String baseURL = "https://www.kayak.com/flights";
		public static WebDriver driver;
		public static void waitElement(WebElement ele) {
			WebDriverWait wait = new WebDriverWait(TestBase.driver, 50);
			wait.until(ExpectedConditions.visibilityOf(ele));
		}
}

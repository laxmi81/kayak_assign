package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;

import Utility_classes.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class hooks extends TestBase {
@SuppressWarnings("unused")
private TestBase base;
	
	public hooks(TestBase base) {
		this.base = base;
	}

	@Before
	public void initDriver() {
		System.out.println("Open browser");
		//System.setProperty("webdriver.chrome.driver", "lib/chromedriver 3");
		WebDriverManager.chromedriver().setup();
		TestBase.driver = new ChromeDriver();
		TestBase.driver.manage().window().maximize();
		TestBase.driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@After
	public void teardown() {
		System.out.println("Close browser");
		TestBase.driver.quit();
	}
}


import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

Mobile.startApplication('mobileapp/Calculator_v8.1 (403424005)_apkpure.com.apk', false)

Mobile.tap(findTestObject('Kalkulator/Angka5'), 0)

Mobile.tap(findTestObject('Kalkulator/Kali'), 0)

Mobile.tap(findTestObject('Kalkulator/Angka6'), 0)

Mobile.tap(findTestObject('Kalkulator/Bagi'), 0)

Mobile.tap(findTestObject('Kalkulator/Angka1'), 0)

Mobile.tap(findTestObject('Kalkulator/Angka0'), 0)

Mobile.tap(findTestObject('Kalkulator/SamaDengan'), 0)

Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('Kalkulator/DeleteAll'), 0)

Mobile.comment('Menghitung Luas Lingkaran')

Mobile.tap(findTestObject('Kalkulator/tombolPhi'), 0)

Mobile.tap(findTestObject('Kalkulator/Kali'), 0)

Mobile.tap(findTestObject('Kalkulator/Angka7'), 0)

Mobile.tap(findTestObject('Kalkulator/Kali'), 0)

Mobile.tap(findTestObject('Kalkulator/Angka7'), 0)

Mobile.tap(findTestObject('Kalkulator/SamaDengan'), 0)

Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('Kalkulator/DeleteAll'), 0)

Mobile.tap(findTestObject('Kalkulator/TitikTigaBar'), 0)

Mobile.tap(findTestObject('Kalkulator/History'), 0)

Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('Kalkulator/BackImageButton'), 0)

Mobile.closeApplication()


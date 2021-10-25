import requests
from selenium import webdriver
from bs4 import BeautifulSoup
import time


path=("C:\\Users\\Trashi\\Downloads\\chromedriver_win32\\chromedriver.exe")
driver=webdriver.Chrome(path)
driver.get("https://www.naukri.com")
print(driver.title)

searchbox= driver.find_element_by_xpath('//*[@id="qsb-keyskill-sugg"]')
searchbox.send_keys('Python Developer')

searchButton = driver.find_element_by_xpath('//*[@id="search-jobs"]/button')
searchButton.click()

const { browser } = require('webdriverio');

describe('Select Date of Birth', () => {
  it('should select a date of birth', async () => {
    // Open the web page containing the calendar
    await browser.url('https://example.com/your-calendar-page');

    // Replace 'your-calendar-page' with the actual URL of the page containing the calendar.

    // Click on the input field to open the calendar
    const inputField = await $('input#dob-input'); // Replace with the actual selector
    await inputField.click();

    // Select the year, month, and day from the calendar
    const yearDropdown = await $('select#year-dropdown'); // Replace with the actual selector
    await yearDropdown.selectByVisibleText('1990'); // Replace with the desired year

    const monthDropdown = await $('select#month-dropdown'); // Replace with the actual selector
    await monthDropdown.selectByVisibleText('June'); // Replace with the desired month

    const dayElement = await $('td.day-cell'); // Replace with the actual selector
    await dayElement.click(); // Replace with the day you want to select

    // Optionally, you can add assertions to verify the selected date
    const selectedDate = await inputField.getValue();
    assert.strictEqual(selectedDate, '06/15/1990'); // Replace with the expected date format

    // Close the calendar or perform any additional actions as needed
  });
});


/*** sendond  */

const { browser } = require('webdriverio');

describe('Select June from Calendar', () => {
  it('should select the month of June from a calendar', async () => {
    // Open the web page containing the calendar
    await browser.url('https://example.com/your-calendar-page');

    // Replace 'your-calendar-page' with the actual URL of the page containing the calendar.

    let isJuneSelected = false;

    for (let i = 0; i < 12; i++) {
      // Check if the displayed month is June
      const displayedMonth = await $('span#month-label').getText(); // Replace with the actual selector for the displayed month
      if (displayedMonth === 'June') {
        isJuneSelected = true;
        break;
      }

      // Click on the "Next" button to navigate to the next month
      const nextButton = await $('button#next-month-button'); // Replace with the actual selector for the "Next" button
      await nextButton.click();

      // You can add waits or other actions as needed
      await browser.pause(1000); // Example wait for 1 second
    }

    if (isJuneSelected) {
      console.log('June is selected!');
      // Add any additional actions or assertions for when June is selected
    } else {
      console.log('June is not selected after 12 months.');
      // Handle the case when June is not found after looping through all months
    }

    // Perform any additional actions or assertions after selecting June or handling the case when it's not found.
  });
});

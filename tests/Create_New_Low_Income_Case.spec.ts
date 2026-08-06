import { test, expect, Page } from '@playwright/test';

let myCaseID: string | null;
//const myCaseID = null;

async function CreateNewCase(page: Page){
//test('test', async ({ page }) => {
  // Log into CHATS site with credentials
  //await page.goto('https://cccap--uat.sandbox.my.salesforce.com/');
  //await page.getByRole('textbox', { name: 'Username' }).dblclick();
  //await page.getByRole('textbox', { name: 'Username' }).fill('eli.trujillo@state.co.us.chats.uat');
  //await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  //await page.getByRole('textbox', { name: 'Password' }).click();
  //await page.getByRole('textbox', { name: 'Password' }).fill('myYamahaBike#12');
  //await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

  // Select the Case tab
  await page.getByText('Case', { exact: true }).click();
  // Click the New button to create a new case
  await page.getByRole('button', { name: 'New' }).click();

  // Search for Individual on First and Last Name
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('TestFirstName');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('TestLastName');
  await page.getByText('Search', { exact: true }).click();

  // Select the New Case button
  await page.getByRole('button', { name: 'New Case' }).click();

  // Update Case Information
  const countyCombobox = page.getByRole('combobox', { name: '*County' });
  await page.getByRole('button', { name: 'Remove' }).click();
  await countyCombobox.fill('Adams');
  await page.keyboard.press('ArrowRight');
  await page.getByRole('article').getByText('Adams', { exact: true }).click();

  // Select the Date Application Received
  await page.getByRole('button', { name: 'Date Picker' }).click();
  await page.getByRole('button', { name: 'Today' }).click();

  // Select the Next button
  await page.getByRole('button', { name: 'Next' }).click();

  // Update Other Case Information
  // span:nth-child(1) = No
  // span:nth-child(2) = Yes
  // span:nth-child(3) = Unknown
  await page.locator('div:nth-child(2) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(1) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(3) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(1) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(4) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(1) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(5) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(1) > .slds-radio__label > .slds-radio_faux').click();

  await page.locator('div:nth-child(6) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(2) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(7) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(2) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(8) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(2) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(9) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(2) > .slds-radio__label > .slds-radio_faux').click();

  await page.locator('div:nth-child(10) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(3) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(11) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(3) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(12) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(3) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(13) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(3) > .slds-radio__label > .slds-radio_faux').click();

  await page.locator('div:nth-child(14) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(1) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(15) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(2) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(16) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(3) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(17) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(1) > .slds-radio__label > .slds-radio_faux').click();

  await page.locator('div:nth-child(18) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(1) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(19) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(2) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(20) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(3) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(21) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(1) > .slds-radio__label > .slds-radio_faux').click();

  await page.locator('div:nth-child(22) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(1) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(23) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(2) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(24) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(3) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(25) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(1) > .slds-radio__label > .slds-radio_faux').click();

  await page.locator('div:nth-child(26) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(1) > .slds-radio__label > .slds-radio_faux').click();
  await page.locator('div:nth-child(27) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(2) > .slds-radio__label > .slds-radio_faux').click();

  // span:nth-child(1) = I participate
  // span:nth-child(2) = I'd like to learn more
  // span:nth-child(3) = I'm not interested
  // span:nth-child(4) = Unknown
  await page.locator('div:nth-child(28) > .slds-grid > .slds-is-relative > .labelCSS > fieldset > .slds-form-element__control > span:nth-child(3) > .slds-radio__label > .slds-radio_faux').click();

  // Select the Next button
  await page.getByRole('button', { name: 'Next' }).click();

  // Update Homeless Status
  await page.getByLabel('*Is the family homeless?').selectOption('N');
  await page.getByRole('button', { name: 'Date Picker' }).first().click();
  await page.getByRole('button', { name: 'Today' }).click();

  // Update Residence Address
  await page.getByLabel('Address Line 1').nth(0).fill('1234 Main Street');
  await page.getByLabel('City').nth(1).fill('Thornton');
  await page.getByLabel('Zip').nth(1).fill('80229');

  // Update Mailing Address
  await page.locator('.slds-p-around_small.slds-col.slds-size_12-of-12 > .slds-form-element > lightning-primitive-input-checkbox > .slds-form-element__control > .slds-checkbox > .slds-checkbox__label > .slds-checkbox_faux').click();
  await page.getByLabel('*Verified').selectOption('SD');

  // Update Contact Information
  await page.getByLabel('*Preferred Method Of Contact').selectOption('Mobile Phone');
  await page.getByRole('textbox', { name: 'Mobile Phone Number (XXX-XXX-' }).click();
  await page.getByRole('textbox', { name: 'Mobile Phone Number (XXX-XXX-' }).fill('3031112222');
  await page.getByRole('button', { name: 'Next' }).click();

  // Validate Home and Mailing Address
  await page.locator('.slds-text-title_caps > td > .slds-truncate > .slds-form-element > lightning-primitive-input-radio > .slds-form-element__control > .slds-radio > .slds-radio__label > .slds-radio_faux').first().click();
  await page.getByRole('button', { name: 'Finish' }).first().click();
  await page.locator('span:nth-child(4) > div:nth-child(8) > .slds-table > tbody > .slds-text-title_caps > td > .slds-truncate > .slds-form-element > lightning-primitive-input-radio > .slds-form-element__control > .slds-radio > .slds-radio__label > .slds-radio_faux').click();
  await page.getByRole('button', { name: 'Finish' }).click();

  // Select the Complete button
  await page.getByRole('button', { name: 'Complete' }).click();

  // Assign Case ID text to public variable
  //const myCaseID = await page.locator('lightning-formatted-text').first().innerText();
  const myCaseID = await page.locator('lightning-formatted-text').first().textContent();
  // Optional: Add a check to ensure it was captured
  if (myCaseID) {
      console.log(`Captured Case ID: ${myCaseID}`);
  } else {
      console.error("Failed to capture Case ID.");
  }
};

async function DeleteCreatedCase(page: Page){
  // Select the Delete button
  await page.getByText('Delete', { exact: true }).nth(0).click();
  // Confirm the Delete action by selecting the Delete button again
  await page.getByText('Delete', { exact: true }).nth(1).click();
}

async function LogIn(page: Page){
  // Log into CHATS site with credentials
  await page.goto('https://cccap--sitfull.sandbox.my.salesforce.com/');
  await page.getByRole('textbox', { name: 'Username' }).dblclick();
  await page.getByRole('textbox', { name: 'Username' }).fill('eli.trujillo@state.co.us.chats.sitfull');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('myYamahaBike#10');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
};

async function LogOut(page: Page){
  // Log out of CHATS
  await page.getByRole('button', { name: 'View profile' }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();
};

async function AddPrimaryCareTaker(page: Page){
  await page.getByText('Add Individual', { exact: true }).click();
  await page.getByLabel('*Individual Status').selectOption('PC');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('PrimaryCareTakerFirstName');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Middle Initial' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('PrimaryCareTakerLastName');
  await page.getByLabel('*Identity Verified').selectOption('V');
  await page.getByLabel('*Identity How Verified').selectOption('CN');
  await page.getByRole('button', { name: 'Date Picker' }).click();
  await page.getByRole('textbox', { name: 'DOB *' }).fill('08/05/2000');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('test@abc.com');
  await page.getByRole('textbox', { name: 'Date Person Entered Home *' }).click();
  await page.getByRole('button', { name: 'Today' }).click();
  await page.getByLabel('*Military Status').selectOption('2');
  await page.getByLabel('Marital Status').selectOption('1');
  await page.getByLabel('*Highest Grade Completed').selectOption('1');
  await page.getByRole('button', { name: 'Complete' }).click();
  await page.locator('td > .slds-form-element > lightning-primitive-input-radio > .slds-form-element__control > .slds-radio > .slds-radio__label > .slds-radio_faux').click();
  await page.getByRole('button', { name: 'Clear' }).click();
}

async function LoadExistingCase(page: Page){
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search...' }).fill('11422450');
  await page.getByRole('searchbox', { name: 'Search...' }).press('ArrowDown');
  await page.getByRole('option', { name: '11422450 , Case •' }).press('Enter');
}

test('test', async ({ page }) => {
  await LogIn(page);
  await CreateNewCase(page);
  await AddPrimaryCareTaker(page);

  //await LoadExistingCase(page);
  
  //await AddChild(page);
  //await AddChildAndPrimaryCareTakerRelationship(page);
  //await SetChildCareRequest(page);
  //await DetermineEligibilityLowIncome(page);
  //await AddAuthorization(page)

  //await DeleteCreatedCase(page);

  //await DeletePrimaryCareTaker(page);
  //await Delete Child(page);

  //await LogOut(page);
});
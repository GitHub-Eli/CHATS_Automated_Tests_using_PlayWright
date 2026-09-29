import { test, expect, Page } from '@playwright/test';

let myLowIncomeCaseID = ''; // Initialize myCaseID as an empty string
let myPrimaryCareTakerIDLowIncome = ''; // Initialize myPrimaryCareTakerID as an empty string
let myChildIDLowIncome = ''; // Initialize myChildID as an empty string

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

async function CreateLowIncomeCase(page: Page){
  // Select the Case tab
  await page.getByText('Case', { exact: true }).click();
  // Click the New button to create a new case
  await page.getByRole('button', { name: 'New' }).click();

  // Search for Individual on First and Last Name
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('TestFirstNameLowIncome');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('TestLastNameLowIncome');
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
  await page.waitForTimeout(3000);
  myLowIncomeCaseID = await page.locator('text=Case ID').locator('xpath=..//following-sibling::*//lightning-formatted-text').nth(1).textContent() ?? '';

  // Optional: Add a check to ensure it was captured
  if (myLowIncomeCaseID) {
      console.log(`Captured Case ID for Low Income case: ${myLowIncomeCaseID}`);
  } else {
      console.error("Failed to capture Case ID for Low Income case.");
  }
};

async function AddPrimaryCareTakerForLowIncome(page: Page){
  await page.getByText('Add Individual', { exact: true }).click();
  await page.getByLabel('*Individual Status').selectOption('PC');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('PrimaryCareTakerFirstNameLowIncome');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Middle Initial' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('PrimaryCareTakerLastNameLowIncome');
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
  await page.locator('td > .slds-form-element > lightning-primitive-input-radio > .slds-form-element__control > .slds-radio > .slds-radio__label > .slds-radio_faux').nth(0).click();
  await page.getByRole('button', { name: 'Clear' }).click();

  // Assign Primary Care Taker ID text to public variable
  myPrimaryCareTakerIDLowIncome = await page.locator('text=Client ID').locator('xpath=..//following-sibling::*//lightning-formatted-text').first().textContent() ?? '';

  // Optional: Add a check to ensure it was captured
  if (myPrimaryCareTakerIDLowIncome) {
      console.log(`Captured Primary CareTaker ID for Low Income case: ${myPrimaryCareTakerIDLowIncome}`);
  } else {
      console.error("Failed to capture Primary CareTaker ID for Low Income case.");
  }
}

async function AddPrimaryCareTakerPrimaryActivity(page: Page){
  await page.getByRole('tab', { name: 'Related' }).click();
  await page.keyboard.press('PageDown');  //might need to add another PageDown depending on the screen size and resolution
  await page.getByRole('article', { name: 'Primary Activity', exact: true }).locator('button[name="New"]').click();
  await page.getByRole('combobox', { name: 'Primary Activity' }).click();
  await page.getByLabel('New Primary Activity').getByText('Job Search').click();
  await page.keyboard.press('Tab');
  await page.getByRole('textbox', { name: 'Effective Begin Date' }).click();
  await page.getByRole('button', { name: 'Today' }).click();
  await page.getByRole('combobox', { name: 'Case ID' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('combobox', { name: 'Case ID' }).press('Enter');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  // JOB SEARCH
  await page.keyboard.press('PageUp'); 
  await page.getByLabel('Job Search').getByRole('button', { name: 'New' }).click();
  await page.getByRole('textbox', { name: 'Effective Begin Date' }).click();
  await page.getByRole('button', { name: 'Today' }).click();
  await page.getByRole('combobox', { name: 'Verified' }).click();
  await page.getByLabel('Verified').getByText('Written Verification').nth(1).click();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
}

async function LoadLowIncomeCase(page: Page){
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Search...' }).fill(`${myLowIncomeCaseID}`);
  await page.waitForTimeout(3000);  // purposely wait to allow the search results to load before pressing ArrowDown
  await page.getByRole('searchbox', { name: 'Search...' }).press('ArrowDown');
  await page.getByRole('option', { name: `${myLowIncomeCaseID} , Case •` }).press('Enter');
}

async function AddChildForLowIncome(page: Page){
  await page.getByText('Add Individual', { exact: true }).click();
  await page.getByLabel('*Individual Status').selectOption('Child');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('ChildFirstNameLowIncome');
  await page.getByRole('textbox', { name: 'Middle Initial' }).click();
  await page.getByRole('textbox', { name: 'Middle Initial' }).fill('A');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('ChildLastNameLowIncome');
  await page.getByRole('textbox', { name: 'SSN' }).click();
  await page.getByRole('textbox', { name: 'SSN' }).fill('821556543');
  await page.getByRole('textbox', { name: 'SSN' }).press('Tab');
  await page.locator('select').nth(1).selectOption('Female');
  await page.getByLabel('*Identity Verified').selectOption('V');
  await page.getByLabel('*Identity How Verified').selectOption('CN');
  await page.locator('select').nth(4).selectOption('Yes'); 
  await page.getByRole('textbox', { name: 'DOB *' }).click();
  await page.getByRole('button', { name: 'Date Picker' }).click();
  await page.getByText('21', { exact: true }).click();
  await page.getByRole('textbox', { name: 'DOB *' }).fill('09/21/2021');
  await page.getByLabel('DOB Verified').selectOption('V');
  await page.getByLabel('*DOB How Verified').selectOption('BC');
  await page.locator('select').nth(7).selectOption('No'); 
  await page.locator('select').nth(8).selectOption('No'); 
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Date Person Entered Home *' }).click();
  await page.getByRole('button', { name: 'Date Picker' }).click();
  await page.getByRole('button', { name: 'Today' }).click();
  await page.locator('span:nth-child(5) > .slds-checkbox__label > .slds-checkbox_faux').click();
  await page.locator('span:nth-child(5) > .slds-checkbox__label > .slds-checkbox_faux').click();
  await page.getByLabel('*Ethnicity').selectOption('U');
  await page.getByLabel('*Citizenship Status').selectOption('CZN');
  await page.getByLabel('Verified', { exact: true }).selectOption('V');
  await page.getByLabel('*How Verified').selectOption('CC');
  await page.getByLabel('*Military Status').selectOption('0');
  await page.getByLabel('*Highest Grade Completed').selectOption('7');
  await page.getByRole('button', { name: 'Complete' }).click();
  await page.locator('div:nth-child(4) > .slds-table > tbody > tr > td > .slds-form-element > lightning-primitive-input-radio > .slds-form-element__control > .slds-radio > .slds-radio__label > .slds-radio_faux').click();
  await page.getByRole('button', { name: 'Clear' }).click();

  // Assign Child ID text to public variable
  myChildIDLowIncome = await page.locator('text=Client ID').locator('xpath=..//following-sibling::*//lightning-formatted-text').nth(1).textContent() ?? '';


  // Optional: Add a check to ensure it was captured
  if (myChildIDLowIncome) {
      console.log(`Captured Child ID for Low Income case: ${myChildIDLowIncome}`);
  } else {
      console.error(`Failed to capture Child ID for Low Income case.`);
  }
}

async function AddChildAndPrimaryCareTakerRelationshipLowIncome(page: Page){
  await page.getByRole('tab', { name: 'Related' }).click();
  await page.getByRole('link', { name: `${myPrimaryCareTakerIDLowIncome}` }).click();
  await page.getByText('New Relationship', { exact: true }).click();
  await page.getByLabel('*Relationship').selectOption('D');
  await page.getByRole('combobox', { name: '*Client ID' }).click();
  await page.getByRole('combobox', { name: '*Client ID' }).click();
  await page.getByRole('combobox', { name: '*Client ID' }).fill(`${myChildIDLowIncome}`);
  await page.getByRole('combobox', { name: '*Client ID' }).press('ArrowRight');
  await page.waitForTimeout(5000);
  await page.getByRole('combobox', { name: '*Client ID' }).press('ArrowDown');
  await page.getByRole('combobox', { name: '*Client ID' }).press('Enter');
  await page.getByRole('button', { name: 'Save' }).click();
}

async function SetChildCareRequest(page: Page){
  await page.getByText('Child Care Request', { exact: true }).click();
  await page.locator('.slds-cell-wrap > .slds-form-element > lightning-primitive-input-checkbox > .slds-form-element__control > .slds-checkbox > .slds-checkbox__label > .slds-checkbox_faux').click();
  await page.getByRole('button', { name: 'Complete' }).click();
}

// NEEDS WORK
async function DetermineEligibilityLowIncome(page: Page){
  await page.getByText('Determine Eligibility', { exact: true }).click();
  await page.getByLabel('*Program').selectOption('LI');
  await page.getByRole('button', { name: 'Assess Eligibility' }).click();
  //await page.locator('.loading.cLoadingSpinnerComp.cAbstractComponent').first().click();
  //await page.locator('.windowViewMode-normal > .loading.cLoadingSpinnerComp.cAbstractComponent').click();
  await page.getByRole('button', { name: 'Confirm Eligibility' }).click();
}

// NEEDS WORK
async function CreateAuthorizationLowIncome(page: Page){
  await page.getByText('Create Authorization', { exact: true }).click();

  await page.locator('.slds-form-element > .slds-form-element__control > .slds-select_container > .slds-select').nth(3).click();
  await page.locator('.slds-form-element > .slds-form-element__control > .slds-select_container > .slds-select').nth(3).selectOption('CHILDFIRSTNAMELOWINCOME CHILDLASTNAMELOWINCOME / I570960');

  //await page.locator('#select-938').selectOption('a1rhG00000XbGPNQA3');
  //await page.getByRole('combobox', { name: '*Child Name/State ID' }).fill(`${myChildIDLowIncome}`);
  //await page.getByRole('combobox', { name: '*Child Name/State ID' }).click();
  //await page.waitForTimeout(3000);
  //await page.getByRole('combobox', { name: '*Child Name/State ID' }).press('ArrowDown');
  //await page.getByRole('combobox', { name: '*Child Name/State ID' }).press('Enter');

  //await page.getByLabel('*Child Name/State ID').selectOption('C');

  await page.getByRole('textbox', { name: 'Authorization Begin Date' }).click();
  await page.getByRole('button', { name: 'Today' }).click();
  await page.getByRole('searchbox', { name: 'Provider ID' }).click();
  await page.getByRole('searchbox', { name: 'Provider ID' }).fill('1528536');
  //await page.getByRole('searchbox', { name: 'Provider ID' }).press('ArrowDown');
  //await page.getByRole('searchbox', { name: 'Provider ID' }).press('ArrowDown');
  //await page.getByRole('searchbox', { name: 'Provider ID' }).press('ArrowDown');
  await page.getByRole('searchbox', { name: 'Provider ID' }).press('ArrowDown');
  await page.getByText('1528536', { exact: true }).click();
  await page.locator('#input-999').click();
  await page.locator('#input-999').fill('8');
  await page.locator('#input-999').press('Tab');
  await page.locator('#input-1001').fill('8');
  await page.locator('#input-1001').press('Tab');
  await page.locator('#input-1003').fill('8');
  await page.locator('#input-1003').press('Tab');
  await page.locator('#input-1005').fill('8');
  await page.locator('#input-1005').press('Tab');
  await page.locator('#input-1007').fill('8');
  await page.locator('#input-1007').press('Tab');
  await page.locator('#input-1009').fill('8');
  await page.locator('#input-1009').press('Tab');
  await page.locator('#input-1011').fill('8');
  await page.locator('#input-1011').press('Tab');
  await page.locator('#select-1012').selectOption('1');
  await page.locator('#select-1012').press('Tab');
  await page.locator('#select-1013').selectOption('1');
  await page.locator('#select-1013').press('Tab');
  await page.locator('#select-1014').selectOption('1');
  await page.locator('#select-1014').press('Tab');
  await page.locator('#select-1015').selectOption('1');
  await page.locator('#select-1015').press('Tab');
  await page.locator('#select-1016').selectOption('1');
  await page.locator('#select-1016').press('Tab');
  await page.locator('#select-1017').selectOption('1');
  await page.locator('#select-1017').press('Tab');
  await page.locator('#select-1018').selectOption('1');
  await page.locator('#select-1018').press('Tab');
  await page.getByRole('button', { name: 'Next' }).click();
}

async function LoadPrimaryCareTakerLowIncome(page: Page){
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search...' }).fill(`${myPrimaryCareTakerIDLowIncome}`);
  await page.waitForTimeout(3000);  // purposely wait to allow the search results to load before pressing ArrowDown
  await page.getByRole('searchbox', { name: 'Search...' }).press('ArrowDown');
  await page.getByRole('option', { name: `${myPrimaryCareTakerIDLowIncome} , Individual •` }).press('Enter');
}

async function DeletePrimaryCareTaker(page: Page){
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(3000);  // purposely wait to allow the modal to load before selecting the Delete button again
  await page.getByRole('button', { name: 'Delete' }).click();
}

async function LoadChildLowIncome(page: Page){
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search...' }).fill(`${myChildIDLowIncome}`);
  await page.waitForTimeout(3000);  // purposely wait to allow the search results to load before pressing ArrowDown
  await page.getByRole('searchbox', { name: 'Search...' }).press('ArrowDown');
  await page.getByRole('option', { name: `${myChildIDLowIncome} , Individual •` }).press('Enter');
}

async function DeleteChild(page: Page){
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.waitForTimeout(3000);  // purposely wait to allow the modal to load before selecting the Delete button again
  await page.getByRole('button', { name: 'Delete' }).click();
}

async function DeleteCase(page: Page){
  // Select the Delete button
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Delete' }).click();
  // Confirm the Delete action by selecting the Delete button again
  await page.locator('span.label.bBody').filter({ hasText: 'Delete' }).click();
}

async function LogOut(page: Page){
  // Log out of CHATS
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'View profile' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Log Out' }).click();
};

test('End to End Test for Low Income Case', async ({ page }) => {
  await LogIn(page);
  await CreateLowIncomeCase(page);
  await AddPrimaryCareTakerForLowIncome(page);
  await AddPrimaryCareTakerPrimaryActivity(page);
  await LoadLowIncomeCase(page);
  await AddChildForLowIncome(page);
  await LoadLowIncomeCase(page);
  await AddChildAndPrimaryCareTakerRelationshipLowIncome(page);
  await LoadLowIncomeCase(page);
  await SetChildCareRequest(page);

  await DetermineEligibilityLowIncome(page);
  await LoadLowIncomeCase(page);
  await CreateAuthorizationLowIncome(page);

  await LoadLowIncomeCase(page);
  await LoadPrimaryCareTakerLowIncome(page);
  await DeletePrimaryCareTaker(page);
  await LoadChildLowIncome(page);
  await DeleteChild(page);
  await DeleteCase(page);
  await LogOut(page);
  console.log(`Celebrate Good Times Come On!`);
});
import { test as base, expect } from '@playwright/test'

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto('/')
    await use(page)
  }
})

test('start', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'VR' })).toBeVisible()
  // await expect(page).toHaveScreenshot()
})

test('interactive demo', async ({ page }) => {
  await page.goto('/demo/Interactive')
  await page.getByRole('link', { name: 'Interactive demo' }).click()
  await expect(page.getByRole('button', { name: 'VR' })).toBeVisible()
  // await expect(page).toHaveScreenshot()
})

test('text demo', async ({ page }) => {
  await page.goto('/demo/Text')
  await page.getByRole('link', { name: 'Text demo' }).click()
  // await page.waitForFunction(() => document.querySelector('button')?.textContent?.includes('VR'))
  await expect(page.getByRole('button', { name: 'VR' })).toBeVisible()
  // const loading = page.locator('div', { hasText: 'Loading.' })
  // await loading.waitFor({ state: 'detached' })
  // await expect(page).toHaveScreenshot()
})

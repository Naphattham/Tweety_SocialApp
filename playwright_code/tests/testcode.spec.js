import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // ---------------- Session 1: การสมัครสมาชิก (Sign Up) ----------------
  await page.goto('https://tweety-i98y.onrender.com/users/sign_in');
  await page.getByRole('link', { name: 'Create account →' }).click();
  await page.getByPlaceholder('Your first name').click();
  await page.getByPlaceholder('Your first name').fill('Naphat');
  await page.getByPlaceholder('Your last name').click();
  await page.getByPlaceholder('Your last name').fill('Thammatheeroe');
  await page.getByPlaceholder('Your username').click();
  await page.getByPlaceholder('Your username').fill('naphat.tham');
  await page.getByPlaceholder('youremail@example.com').click();
  await page.getByPlaceholder('youremail@example.com').fill('naphat.tham@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#confirm-password').click();
  await page.locator('#confirm-password').fill('123456');
  await page.getByRole('button', { name: 'Sign Up' }).click();

  // ---------------- Session 2: การออกจากระบบและเข้าสู่ระบบ (Log Out & Log In) ----------------
  await page.getByRole('link', { name: 'Log Out' }).click();
  await page.getByPlaceholder('youremail@example.com').click();
  await page.getByPlaceholder('youremail@example.com').fill('naphat.tham@gmail.com');
  await page.getByPlaceholder('••••••••').click();
  await page.getByPlaceholder('••••••••').fill('123456');
  await page.getByRole('button', { name: 'Log In' }).click();

  // ---------------- Session 3: การโพสต์ข้อความ (Create Post) ----------------
  await page.getByPlaceholder('Add a title...').click();
  await page.getByPlaceholder('Add a title...').fill('Hi');
  await page.getByPlaceholder('Share something...').click();
  await page.getByPlaceholder('Share something...').press('CapsLock');
  await page.getByPlaceholder('Share something...').fill('สวัสดี');
  await page.getByPlaceholder('Share something...').press('CapsLock');
  await page.getByText('Upload Image').click();
  await page.getByText('TWEETY Home About Get started Support 🔍 Log Out Social Media Dashboard Naphat')
    .setInputFiles('2a2851bbf87ecde2c0e6f8ba18836e1d.jpg');
  await page.getByRole('button', { name: 'Post' }).click();

  // ---------------- Session 4: การแก้ไขโพสต์ (Edit Post) ----------------
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('Hello');
  await page.getByLabel('Content').click();
  await page.getByLabel('Content').press('CapsLock');
  await page.getByLabel('Content').fill('สวัสดีค้าบ');
  await page.getByLabel('Content').press('CapsLock');
  await page.getByRole('button', { name: 'Update Post' }).click();

  // ---------------- Session 5: การแสดงความคิดเห็น (Add Comment) ----------------
  await page.getByRole('link', { name: 'Comments' }).first().click();
  await page.getByPlaceholder('Write your comment...').click();
  await page.getByPlaceholder('Write your comment...').press('CapsLock');
  await page.getByPlaceholder('Write your comment...').fill('สุดยอดเลยครับ');
  await page.getByPlaceholder('Write your comment...').press('CapsLock');
  await page.getByRole('button', { name: 'Post Comment' }).click();

  // ---------------- Session 6: การลบความคิดเห็น (Delete Comment) ----------------
  await page.getByRole('button', { name: 'Delete' }).click();

  // ---------------- Session 7: การกลับไปที่หน้าโปรไฟล์ (Back to Profile) ----------------
  await page.getByRole('link', { name: 'TWEETY' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'My Profile' }).click();
  await page.getByRole('link', { name: 'TWEETY' }).click();
  await page.getByRole('link', { name: 'Buby_SweetGuy' }).click();

  // ---------------- Session 8: การค้นหาโพสต์ (Search Post) ----------------
  await page.getByPlaceholder('Search by title...').click();
  await page.getByPlaceholder('Search by title...').press('CapsLock');
  await page.getByPlaceholder('Search by title...').fill('ผจญภัย');
  await page.getByPlaceholder('Search by title...').press('CapsLock');
  await page.getByRole('button', { name: '🔍' }).click();

  // ---------------- Session 9: การออกจากระบบ (Log Out) ----------------
  await page.getByRole('link', { name: 'Log Out' }).click();
});
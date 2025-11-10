# How to Change Admin Email or Password

A simple guide to update your admin login credentials.

## 📍 Step 1: Open the Seeder File

1. Go to your project folder
2. Open: `personal-site-backend/src/seeders/adminSeeder.js`
3. Open it with any text editor (Notepad, VS Code, etc.)

## ✏️ Step 2: Change Your Credentials

Find these lines near the top of the file:

```javascript
const ADMIN_EMAIL = 'admin@olukunleowolabi.com';
const ADMIN_PASSWORD = 'Hx12890#@12341';
const OLD_EMAIL = '';
```

### To Change Password Only:
- Change `ADMIN_PASSWORD` to your new password
- Keep `ADMIN_EMAIL` the same
- Keep `OLD_EMAIL` empty: `''`

**Example:**
```javascript
const ADMIN_EMAIL = 'admin@olukunleowolabi.com';  // Same email
const ADMIN_PASSWORD = 'MyNewPassword123!@#';     // New password
const OLD_EMAIL = '';                              // Leave empty
```

### To Change Email Only:
- Change `ADMIN_EMAIL` to your new email
- Put your **current email** in `OLD_EMAIL`
- Password can stay the same or change it

**Example:**
```javascript
const ADMIN_EMAIL = 'newemail@example.com';       // New email
const ADMIN_PASSWORD = 'Hx12890#@12341';           // Same or new password
const OLD_EMAIL = 'admin@olukunleowolabi.com';     // Your current email
```

### To Change Both:
- Change both `ADMIN_EMAIL` and `ADMIN_PASSWORD`
- Put your **current email** in `OLD_EMAIL`

**Example:**
```javascript
const ADMIN_EMAIL = 'newemail@example.com';       // New email
const ADMIN_PASSWORD = 'MyNewPassword123!@#';     // New password
const OLD_EMAIL = 'admin@olukunleowolabi.com';     // Your current email
```

## 💾 Step 3: Save the File

Press `Ctrl + S` (Windows/Linux) or `Cmd + S` (Mac) to save.

## 🚀 Step 4: Run the Seeder

1. Open terminal/command prompt
2. Go to the backend folder:
   ```bash
   cd personal-site-backend
   ```
3. Run the seeder:
   ```bash
   npm run seed:admin
   ```

**Note:** If you get an error about MongoDB connection, make sure you have a `.env` file with `MONGODB_URI` set, or run:
```bash
MONGODB_URI="your_mongodb_connection_string" npm run seed:admin
```

## ✅ Step 5: Check the Result

You should see one of these messages:
- ✅ `🔄 Admin user updated successfully!` - Your credentials were updated
- ✅ `🎉 Admin user created successfully!` - A new admin was created

## 🔄 Step 6: Reset OLD_EMAIL (If You Changed Email)

After successfully updating, open the seeder file again and set:
```javascript
const OLD_EMAIL = '';
```
Save the file. This is optional but recommended.

## 🧪 Step 7: Test Your New Credentials

1. Go to your website's admin login page
2. Try logging in with your new email/password
3. If it works, you're done! ✅

## 📝 Quick Reference

| What to Change | ADMIN_EMAIL | ADMIN_PASSWORD | OLD_EMAIL |
|---------------|-------------|----------------|-----------|
| **Password only** | Keep same | Change | Leave empty `''` |
| **Email only** | Change | Keep same or change | Put current email |
| **Both** | Change | Change | Put current email |

## ⚠️ Important Notes

- **Strong Password**: Use at least 8 characters with uppercase, lowercase, numbers, and special characters
- **OLD_EMAIL**: Only fill this when changing your email address
- **After Update**: You can reset `OLD_EMAIL` to empty string
- **Data Safety**: All your content (blogs, notes, etc.) remains unchanged

## 🆘 Troubleshooting

**Problem:** "Cannot connect to MongoDB"
- **Solution:** Make sure your `.env` file has `MONGODB_URI` set correctly

**Problem:** "Admin user already exists"
- **Solution:** This is normal if updating. The seeder will update the existing admin.

**Problem:** Can't log in after update
- **Solution:** Double-check the email and password in the seeder file match what you're using

---

**That's it!** You've successfully changed your admin credentials. 🎉


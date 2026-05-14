# 📧 Email Form Setup Guide

## To Make the Inquiry Form Send Emails to: farukanwaribrahim@gmail.com

The form is currently configured to use Formspree. To receive emails at your address, follow these simple steps:

### Step 1: Go to Formspree
Visit: https://formspree.io

### Step 2: Sign Up or Log In
- Create a free account or log in with your email

### Step 3: Create a New Form
- Click "Create" or "New Form"
- Enter your email address: **farukanwaribrahim@gmail.com**
- Select the project name (e.g., "A.I MANARAT")
- Click "Create Form"

### Step 4: Get Your Form ID
- After creating the form, you'll get a form ID (looks like: `xzbnqjlb`)
- Copy this form ID

### Step 5: Update the HTML File
1. Open: `c:\Users\User\Desktop\HTML\html\index.html`
2. Find this line (around line 267):
   ```html
   <form class="inquiry-form" id="inquiryForm" method="POST" action="https://formspree.io/f/xzbnqjlb">
   ```
3. Replace `xzbnqjlb` with your new Form ID
4. Save the file

### Example:
```html
<!-- Before -->
<form action="https://formspree.io/f/xzbnqjlb">

<!-- After (with your Form ID) -->
<form action="https://formspree.io/f/YOUR_NEW_ID_HERE">
```

### Step 6: Test the Form
1. Open the website in your browser
2. Scroll to "Post Your Transportation Need" section
3. Fill in the form and click "Send Inquiry"
4. You should receive an email at farukanwaribrahim@gmail.com

---

## ✨ Your Website Features:

✅ **Logo**: A.I MANARAT logo displayed prominently
✅ **Gradients**: Multiple unique gradient colors throughout
✅ **Mobile Responsive**: Works perfectly on phones, tablets, and desktops
✅ **Contact Info**:
   - WhatsApp: https://wa.me/2348027605352
   - Phone: +234 802 760 5352, +234 814 618 1949
   - Email: anwaribrahimlawankn@gmail.com

✅ **24/7 Operations**: Business hours displayed
✅ **Clean Design**: Professional, modern interface
✅ **Animations**: Smooth transitions and interactive elements

---

## 🎨 Color Scheme:
- Primary: Gold (#ffd700)
- Secondary: Orange (#ff9500)
- Accent: Purple (#9d4edd)
- Accent: Cyan (#00d9ff)
- Accent: Pink (#ff006e)

---

## 📞 Need Help?
The form has been pre-configured with Formspree. Just follow the steps above to connect it to your email!

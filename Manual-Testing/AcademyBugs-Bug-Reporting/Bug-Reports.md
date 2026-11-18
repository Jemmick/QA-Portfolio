# AcademyBugs Detailed Bug Reports

## BUG-001 — Selecting 50 Results Per Page Causes Page to Become Unresponsive

**Bug ID:** BUG-001

**Title:** Selecting 50 Results Per Page Causes Page to Become Unresponsive

**Environment:**
- Website: AcademyBugs
- Platform: Web
- Browser: Safari on macOS

**Precondition:**
User is on the product results page where the number of results displayed per page can be changed.

**Steps to Reproduce:**
1. Navigate to the product results page.
2. Locate the results-per-page option.
3. Select **50 results per page**.
4. Observe the page behavior.

**Expected Result:**
The page should load and display up to 50 products without becoming unresponsive.

**Actual Result:**
The page becomes unresponsive after selecting 50 results per page.

**Reproducibility:**
Reproduced multiple times using the same steps.

**Severity:** High

**Priority:** High

**Reasoning:**
This issue prevents the user from continuing to interact with the page after selecting a valid display option and directly affects site usability.

---

## BUG-002 — Blue Hoodie Displays Placeholder Text Instead of Product Description

**Bug ID:** BUG-002

**Title:** Blue Hoodie Displays Placeholder Text Instead of Product Description

**Environment:**
- Website: AcademyBugs
- Platform: Web
- Browser: Safari on macOS

**Precondition:**
User is browsing products on AcademyBugs.

**Steps to Reproduce:**
1. Navigate to the product listing page.
2. Select the product labeled **Blue Hoodie**.
3. View the product description.

**Expected Result:**
The product page should display a clear, relevant description of the Blue Hoodie.

**Actual Result:**
The product description displays placeholder text beginning with **“Nam nac tellus...”** instead of meaningful product information.

**Reproducibility:**
Reproduced multiple times by reopening the same product.

**Severity:** Medium

**Priority:** Medium

**Reasoning:**
The issue does not prevent the user from browsing the site, but it removes important product information that could affect a purchasing decision.

---

## BUG-003 — Checkout Grand Total Is Calculated Incorrectly

**Bug ID:** BUG-003

**Title:** Checkout Grand Total Is Calculated Incorrectly

**Environment:**
- Website: AcademyBugs
- Platform: Web
- Browser: Safari on macOS

**Precondition:**
User has multiple products in the cart and proceeds to checkout.

**Steps to Reproduce:**
1. Add multiple products to the shopping cart.
2. Proceed to the checkout page.
3. Review the cart subtotal and shipping charge.
4. Compare the displayed Grand Total with the expected calculated total.

**Expected Result:**
The Grand Total should equal the Cart Subtotal plus Shipping.

Cart Subtotal: **$925.19**  
Shipping: **$7.99**  
Expected Grand Total: **$933.18**

**Actual Result:**
The checkout page displays a Grand Total of **$1,033.18**, which is **$100.00 higher** than the correct total.

**Reproducibility:**
Observed during checkout testing.

**Severity:** High

**Priority:** High

**Reasoning:**
Incorrect checkout calculations can cause customers to be charged the wrong amount and directly affect trust, purchasing decisions, and payment accuracy.
### Evidence

![BUG-003 Checkout Total Error](Evidence/Screenshot%202026-11-18%20at%202.10.48%20PM.png)
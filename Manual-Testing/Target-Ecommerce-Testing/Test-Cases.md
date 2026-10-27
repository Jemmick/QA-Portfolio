## TC-001 — Verify User Can Search for a Valid Product

**Precondition:**  
User is on the Target homepage and the search field is visible.

**Steps:**
1. Click inside the search field.
2. Enter "Espresso Machine".
3. Submit the search.
4. Review the displayed search results.

**Expected Result:**  
Relevant products matching the entered search term are displayed.

**Actual Result:**  
Relevant products matching the entered search term were displayed.

**Status:**  
Pass ✅


## TC-003 — Verify Adding a Product Updates the Shopping Cart Correctly

**Precondition:**  
User is viewing the product page for the selected item.

**Steps:**
1. Click **Add to Cart** for the selected product.
2. Verify the cart icon updates to reflect the item quantity.
3. Open the shopping cart.
4. Verify the selected product appears in the cart.

**Expected Result:**  
The selected product is added successfully, the cart count updates correctly, and the correct product appears in the cart.

**Actual Result:**  
Chefman CraftBrew Espresso Machine Stainless Steel was successfully added to the cart, and the cart icon updated to reflect the correct quantity.

**Status:**  
Pass ✅


## TC-004 — Verify Cart Total Updates When Product Quantity Changes

**Precondition:**  
User has the selected product in the shopping cart and is viewing the cart page.

**Steps:**
1. Note the current product price and cart total.
2. Increase the product quantity from 1 to 2.
3. Verify the quantity updates.
4. Verify the cart total updates correctly.

**Expected Result:**  
The product quantity updates successfully, and the cart total is recalculated correctly based on the new quantity.

**Actual Result:**  
The quantity was updated from 1 to 2, and the cart total changed from $108.24 to $216.48.

**Status:**  
Pass ✅


## TC-008 — Verify Cart Contents Persist While Browsing Other Products

**Precondition:**  
User has added at least one product to the shopping cart.

**Steps:**
1. Navigate away from the cart.
2. Browse a different product category.
3. Open another product page.
4. Return to the shopping cart.
5. Verify the original product remains in the cart.

**Expected Result:**  
The original product remains in the cart with the correct quantity and pricing after browsing other areas of the website.

**Actual Result:**  
Two Chefman CraftBrew Espresso Machines remained in the cart while browsing Outdoor Halloween Decorations, and the quantity and pricing remained unchanged.

**Status:**  
Pass ✅


## TC-009 — Verify Checkout Prevents Submission When Required Information Is Missing

**Precondition:**  
User has at least one item in the cart and is on the checkout page.

**Steps:**
1. Enter valid payment information.
2. Enter a valid shipping address but leave the ZIP code field blank.
3. Attempt to continue checkout.

**Expected Result:**  
Checkout does not continue, and a clear validation message identifies the missing required information.

**Actual Result:**  
Checkout was prevented from continuing, and the page displayed a validation message reading “Please Review These Errors,” identifying the missing ZIP code information.

**Status:**  
Pass ✅


## TC-010 — Verify Checkout Proceeds With Valid Required Information

**Precondition:**  
User has at least one item in the cart and is on the checkout page.

**Steps:**
1. Enter all required shipping information using valid data.
2. Enter all required payment information using valid data.
3. Continue the checkout process.

**Expected Result:**  
Checkout proceeds successfully to the next step when all required information is valid.

**Actual Result:**  
Checkout proceeded correctly to the next step after all required shipping and payment information was entered.

**Status:**  
Pass ✅
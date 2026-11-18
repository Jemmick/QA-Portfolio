# AcademyBugs Bug Reporting Project

This project demonstrates manual QA testing and defect documentation using AcademyBugs, a practice website designed for software testing.

The goal of this project was to identify reproducible defects, document them clearly, and evaluate their severity and priority based on user impact.

## Testing Focus

Testing included:

- Product browsing
- Results-per-page functionality
- Product content validation
- Checkout calculations
- General usability and functional behavior

## Bugs Identified

### BUG-001 — Selecting 50 Results Per Page Causes Page to Become Unresponsive

Selecting 50 results per page causes the product page to become unresponsive.

**Severity:** High  
**Priority:** High

---

### BUG-002 — Blue Hoodie Displays Placeholder Text Instead of Product Description

The Blue Hoodie product page displays placeholder text instead of a meaningful product description.

**Severity:** Medium  
**Priority:** Medium

---

### BUG-003 — Checkout Grand Total Is Calculated Incorrectly

The checkout page displays an incorrect Grand Total.

Cart Subtotal: **$925.19**  
Shipping: **$7.99**  
Expected Grand Total: **$933.18**  
Actual Grand Total: **$1,033.18**

The displayed total is **$100.00 higher** than expected.

**Severity:** High  
**Priority:** High

## Skills Demonstrated

- Manual Testing
- Defect Identification
- Bug Reproduction
- Bug Reporting
- Functional Testing
- Content Validation
- Business Logic Testing
- Severity and Priority Assessment
- Checkout Validation

## Test Environment

- Website: AcademyBugs
- Platform: Web
- Browser: Safari
- Operating System: macOS

## Detailed Bug Reports

[View Full Bug Reports](Bug-Reports.md)
# Numba Media Website - Responsive Testing

## Assessment

IS0229 Web Design - Assessment 3

## Responsive Testing

The Numba Media website was tested at the following viewport sizes.

| Viewport | Size          | Result |
| ---      | ---           | ---    |
| Mobile   | 375 × 812 px  | Pass   |
| Tablet   | 768 × 1024 px | Pass   |
| Desktop  | 1440 × 900 px | Pass   |

## Mobile Testing

At 375 × 812 px:

- navigation stacks vertically;
- content remains readable;
- service cards display in one column;
- images scale within the viewport;
- form controls fit the available width; and
- the page does not require unintended horizontal scrolling.

Evidence: `testing/mobile-375px.png`

## Tablet Testing

At 768 × 1024 px:

- navigation displays horizontally below the site branding;
- service cards display in two columns;
- images resize appropriately;
- content spacing remains readable; and
- forms remain usable.

Evidence: `testing/tablet-768px.png`

## Desktop Testing

At 1440 × 900 px:

- branding and navigation display horizontally;
- service cards display in three columns;
- content uses the available space without becoming excessively wide;
- images maintain their aspect ratio; and
- forms and tables remain readable.

Evidence: `testing/desktop-1440px.png`

## Browser Testing

The website was tested using:

- Google Chrome
- Microsoft Edge

The following features were checked:

- page navigation;
- responsive layouts;
- images;
- CSS Grid service cards;
- Flexbox navigation;
- Service Guide table;
- contact form controls;
- HTML5 form validation; and
- keyboard focus states.

The website displayed and functioned correctly during basic testing in both browsers.

Evidence: `testing/browser-testing-edge.png`

## Accessibility Testing

Basic accessibility checks included:

- meaningful image alternative text;
- labels associated with form controls;
- logical heading structure;
- readable foreground/background contrast;
- visible keyboard focus states; and
- keyboard navigation using the Tab key.


---

# Assessment 4 - JavaScript Functional Testing

## Testing Overview

The Numba Media website was tested to confirm that the JavaScript features, form validation and responsive layouts function correctly.

Testing was completed using Visual Studio Code, Live Server and Google Chrome.

## Feature 1 - Service Quote Estimator

| Test                      | Expected Result              | Result |
|---------------------------|------------------------------|--------|
| Photography, 3 hours      | K750.00                      | Pass   |
| Video Production, 2 hours | K700.00                      | Pass   |
| No service selected       | Validation message displayed | Pass   |
| Hours set to 0            | Invalid hours message        | Pass   |
| Hours above 24            | Invalid hours message        | Pass   |

The estimator uses JavaScript to calculate an illustrative production cost based on the selected service and number of hours.

## Feature 2 - Contact Form Validation

| Test                    | Expected Result                | Result |
|-------------------------|--------------------------------|--------|
| Required field empty    | Error message displayed        | Pass   |
| Invalid email format    | Validation prevents submission | Pass   |
| Valid form information  | Quote preview displayed        | Pass   |
| Edit Request button     | Preview closes                 | Pass   |
| Invalid field corrected | Error highlighting disappears  | Pass   |

The form combines HTML5 validation with JavaScript error handling. Invalid fields are highlighted, and users can review their information before proceeding.

The quote request is a demonstration feature. No information is transmitted to Numba Media.

## Responsive Testing

The website was tested at mobile, tablet and desktop viewport sizes.

| Viewport | Width  | Expected Layout           |
|----------|--------|---------------------------|
| Mobile   | 375px  | Single-column layout      |
| Tablet   | 768px  | Two-column service Grid   |
| Desktop  | 1440px | Three-column service Grid |

## JavaScript Console Testing

Chrome Developer Tools was used to check JavaScript execution and identify errors.

The Service Quote Estimator and Contact Form Preview executed successfully without reported JavaScript errors during the completed tests.

## Testing Evidence

Screenshots are stored in `testing/assessment-4/`:

- `01-estimator-success.png`
- `02-estimator-validation.png`
- `03-form-preview.png`
- `04-form-validation.png`
- `05-mobile-testing.png`
- `06-console-testing.png`

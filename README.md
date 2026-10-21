# Numba Media Website

## Project Overview

This website was developed for Assessment 2 of IS0229 Web Design.

The project is a small multi-page website for Numba Media, a media production service based in Papua New Guinea. The website provides information about the business and its services and allows potential clients to submit a quote request through an HTML5 form.

## Target Audience

The website is designed for businesses, organisations, event organisers and individuals seeking professional media production services.

## Website Pages

The website contains three connected pages:

- Home - introduces Numba Media and its main services.
- Services - provides information about the media production services available.
- Contact - provides contact information and a quote request form.

## Technologies Used

- HTML5
- CSS3
- Git
- GitHub
- GitHub Pages
- Visual Studio Code

## HTML5 Features

The website uses semantic HTML5 elements including:

- header
- nav
- main
- section
- article
- figure and figcaption
- table
- form
- footer

The website also includes accessible image alternative text, form labels, HTML5 input types and validation attributes.

## Validation

The HTML pages were checked using the W3C Nu HTML Checker.

The following pages completed validation with no errors or warnings:

- index.html
- services.html
- contact.html

Validation screenshots are included in the `validation` folder.

## Project Links

- GitHub Repository: https://github.com/mathildamorea/numba-media-website
- Published Website: https://mathildamorea.github.io/numba-media-website/

## Author

Mathilda Morea

## Course

IS0229 - Web Design  
Assessment 2 - HTML5 Website  
2026

## Assessment 3 - Responsive Website Development

The Assessment 2 HTML5 website was extended for Assessment 3 using CSS3 responsive design techniques.

### A3 Features

- organised external CSS;
- CSS custom properties for colours, typography and spacing;
- Flexbox header and navigation;
- CSS Grid service card layouts;
- responsive images;
- responsive forms;
- responsive Service Guide table;
- mobile, tablet and desktop media queries;
- reusable button and card styles;
- visible keyboard focus states; and
- responsive browser testing.

### Responsive Breakpoints

The website uses a mobile-first responsive approach.

- Mobile: below 600 px
- Tablet: 600 px to 1023 px
- Desktop: 1024 px and wider

### Layout Behaviour

Service cards adapt according to viewport size:

- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

### Testing Evidence

Responsive and browser testing evidence is available in the `testing` folder.

Additional testing information is documented in `TESTING.md`.

---

# Assessment 4 - Interactive Website Development

## Project Overview

Assessment 4 extends the existing Numba Media responsive website by introducing JavaScript functionality and improved user interaction.

The website provides information about Numba Media's production services and allows visitors to explore estimated service costs and prepare quote requests.

## Technologies Used

- HTML5 - Semantic structure and forms
- CSS3 - Styling and responsive layouts
- Flexbox - Header and navigation
- CSS Grid - Service card layouts
- JavaScript - Calculations, validation and DOM interaction
- Visual Studio Code - Development environment
- Git and GitHub - Version control
- GitHub Pages - Website publication

## JavaScript Features

### Service Quote Estimator

Visitors can select a production service and enter the required number of hours.

JavaScript calculates an illustrative estimated cost in Papua New Guinea Kina.

The estimator validates the selected service and number of hours before displaying a result.

### Contact Form Validation and Preview

The Contact page includes an interactive quote request form.

JavaScript checks required fields, displays validation feedback, highlights invalid inputs and generates a preview of the entered information.

Visitors can edit their details before reviewing the request again.

The form is a demonstration and does not transmit information to Numba Media.

## Responsive Design

The website uses a mobile-first responsive layout:

- Mobile: below 600px
- Tablet: 600px to 1023px
- Desktop: 1024px and wider

The navigation, service cards, images and forms adapt to different screen sizes.

## Accessibility

Accessibility features include:

- Semantic HTML5 elements
- Form labels
- Alternative text for images
- Visible keyboard focus states
- Validation feedback
- ARIA live regions
- Responsive layouts

## Testing

Functional and responsive testing evidence is available in the `testing/assessment-4/` folder.

Testing procedures and results are documented in `TESTING.md`.

## Project Limitations

The quote estimator uses illustrative rates and does not represent an official Numba Media quotation.

The Contact form validates and previews user information but does not send or store quote requests.
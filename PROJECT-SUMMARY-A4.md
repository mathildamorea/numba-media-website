# Assessment 4 - Project Summary

**Course:** ISO229 - Web Design  
**Project:** Numba Media Website  
**Student:** Mathilda Morea  
**Year:** 2026

## Project Purpose and Audience

The Numba Media website was developed to provide information about the media production services offered by Numba Media in Papua New Guinea. The intended audience includes businesses, organisations, event organisers and individuals looking for professional photography, videography and other media production services.

Assessment 4 builds on the HTML5 structure developed in Assessment 2 and the responsive CSS3 design completed in Assessment 3. The main objective was to introduce meaningful JavaScript functionality while maintaining the website's existing structure, usability and responsive design.

## Development and JavaScript Features

Two interactive JavaScript features were implemented.

The first feature is a Service Quote Estimator on the Services page. Visitors select a media production service and enter the number of hours required. JavaScript uses predefined illustrative hourly rates to calculate and display an estimated cost in Papua New Guinea Kina. The feature also checks invalid inputs, including missing service selections and hours outside the permitted range. The estimates are for demonstration purposes and are not official quotations.

The second feature is an enhanced Contact Form Validation and Quote Request Preview. The form combines HTML5 validation with JavaScript to check required information, display error messages and highlight invalid fields. Once the information is valid, JavaScript creates a preview showing the details entered by the visitor. The Edit Request button allows the visitor to return to the form and make changes. The website does not send or store quote requests because no backend processing service has been implemented.

## Responsive Design and Accessibility

The website continues to use a mobile-first responsive design supported by CSS Flexbox, CSS Grid and media queries. Service cards adjust between one, two and three columns depending on the viewport width. Images, navigation and form controls also adapt to smaller screens.

Accessibility features include semantic HTML elements, descriptive form labels, visible keyboard focus states, validation feedback and ARIA live regions for status messages.

## Testing and Reflection

Functional testing was conducted using Google Chrome and Live Server. The JavaScript estimator was tested with valid and invalid inputs, while the Contact form was tested for required-field validation, error highlighting and preview functionality. Mobile testing was also performed at a 375px viewport width.

During development, issues involving form submission, missing JavaScript functionality and invalid-field highlighting were identified and corrected. These improvements helped demonstrate the relationship between HTML structure, CSS styling and JavaScript behaviour.

The completed project provides a responsive and interactive demonstration website that supports Numba Media's communication and service enquiry needs.
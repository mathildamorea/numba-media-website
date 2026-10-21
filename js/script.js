"use strict";

/* =========================================
   NUMBA MEDIA WEBSITE
   ISO229 - Assessment 4
   JavaScript Functionality
   ========================================= */

console.log("Numba Media JavaScript loaded successfully.");


/* =========================================
   FEATURE 1 - SERVICE QUOTE ESTIMATOR
   ========================================= */

// Illustrative hourly rates in Papua New Guinea Kina.
const serviceRates = {
    video: 350,
    photo: 250,
    drone: 400,
    live: 500,
    editing: 200
};

const serviceSelect = document.getElementById("estimate-service");
const hoursInput = document.getElementById("estimate-hours");
const calculateButton = document.getElementById("calculate-estimate");
const estimateResult = document.getElementById("estimate-result");

// Run only on pages containing the estimator.
if (serviceSelect && hoursInput && calculateButton && estimateResult) {

    calculateButton.addEventListener("click", function () {

        const selectedService = serviceSelect.value;
        const hours = Number(hoursInput.value);

        // Check that a service has been selected.
        if (!Object.hasOwn(serviceRates, selectedService)) {
            estimateResult.textContent =
                "Please select a service.";
            return;
        }

        // Validate the number of hours.
        if (
            hoursInput.value.trim() === "" ||
            !Number.isInteger(hours) ||
            hours < 1 ||
            hours > 24
        ) {
            estimateResult.textContent =
                "Please enter a whole number of hours between 1 and 24.";
            return;
        }

        // Calculate the estimated cost.
        const hourlyRate = serviceRates[selectedService];
        const total = hourlyRate * hours;

        // Display the result.
        estimateResult.textContent =
            "Estimated Cost: K" +
            total.toFixed(2) +
            " (illustrative estimate only)";

    });

}


/* =========================================
   FEATURE 2 - CONTACT FORM VALIDATION
   AND QUOTE REQUEST PREVIEW
   ========================================= */

const quoteForm = document.getElementById("quote-form");
const formFeedback = document.getElementById("form-feedback");
const quotePreview = document.getElementById("quote-preview");
const previewDetails = document.getElementById("preview-details");
const editRequestButton = document.getElementById("edit-request");

// Run only on the Contact page when all elements exist.
if (
    quoteForm &&
    formFeedback &&
    quotePreview &&
    previewDetails &&
    editRequestButton
) {

    // Prevent a page reload and process the form.
    quoteForm.addEventListener("submit", function (event) {

        event.preventDefault();

        console.log("Quote form submit event detected.");

        // Clear previous messages and hide old previews.
        formFeedback.textContent = "";
        quotePreview.hidden = true;

        // Validate the HTML5 form fields.
        if (!quoteForm.reportValidity()) {
            formFeedback.textContent =
                "Please complete all required fields correctly.";
            return;
        }

        const nameInput = document.getElementById("full-name");
        const emailInput = document.getElementById("email");

        // Check that the required elements exist.
        if (!nameInput || !emailInput) {
            formFeedback.textContent =
                "Form configuration error. Please check the field IDs.";
            return;
        }

        const fullName = nameInput.value.trim();
        const email = emailInput.value.trim();

        // Additional JavaScript name validation.
        if (fullName.length < 2) {
            formFeedback.textContent =
                "Please enter a full name containing at least two characters.";

            nameInput.focus();
            return;
        }

        // Additional email check.
        if (email === "" || !emailInput.checkValidity()) {
            formFeedback.textContent =
                "Please enter a valid email address.";

            emailInput.focus();
            return;
        }

        // Clear the previous preview.
        previewDetails.replaceChildren();

        /* ---------------------------------
           Helper function for preview lines
           --------------------------------- */

        function addPreviewLine(label, value) {

            if (value === undefined ||
                value === null ||
                String(value).trim() === "") {
                return;
            }

            const paragraph = document.createElement("p");

            const strong = document.createElement("strong");
            strong.textContent = label + ": ";

            const span = document.createElement("span");
            span.textContent = String(value);

            paragraph.append(strong, span);
            previewDetails.appendChild(paragraph);
        }

        /* ---------------------------------
           Customer Information
           --------------------------------- */

        addPreviewLine("Full Name", fullName);
        addPreviewLine("Email Address", email);

        /* ---------------------------------
           Other Form Fields
           --------------------------------- */

        const fields = [
            ["Organisation", "organisation"],
            ["Phone Number", "phone"],
            ["Service Required", "service"],
            ["Preferred Project Date", "project-date"],
            ["Project Description", "project-description"]
        ];

        fields.forEach(function (field) {

            const element = document.getElementById(field[1]);

            if (!element) {
                return;
            }

            let value = element.value.trim();

            // Display the option's text for dropdown menus.
            if (element.tagName === "SELECT" && value !== "") {
                value = element.selectedOptions[0].textContent;
            }

            addPreviewLine(field[0], value);
        });

        /* ---------------------------------
           Preferred Contact Method
           Radio Buttons
           --------------------------------- */

        const selectedContact = quoteForm.querySelector(
            'input[name="contact-method"]:checked'
        );

        if (selectedContact) {
            addPreviewLine(
                "Preferred Contact Method",
                selectedContact.value
            );
        }

        /* ---------------------------------
           Required Deliverables
           Checkboxes
           --------------------------------- */

        const selectedDeliverables = quoteForm.querySelectorAll(
            'input[name="deliverables"]:checked'
        );

        const deliverables = [];

        selectedDeliverables.forEach(function (checkbox) {

            const label = checkbox.closest("label");

            if (label) {
                deliverables.push(label.textContent.trim());
            } else {
                deliverables.push(checkbox.value);
            }

        });

        if (deliverables.length > 0) {
            addPreviewLine(
                "Required Deliverables",
                deliverables.join(", ")
            );
        }

        /* ---------------------------------
           Display Quote Preview
           --------------------------------- */

        formFeedback.textContent =
            "Your information is valid. Please review your quote request.";

        quotePreview.hidden = false;

        quotePreview.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        console.log("Quote request preview displayed.");

    });


    /* =====================================
       EDIT REQUEST BUTTON
       ===================================== */

    editRequestButton.addEventListener("click", function () {

        // Hide the preview.
        quotePreview.hidden = true;

        // Display a feedback message.
        formFeedback.textContent =
            "You can now edit your quote request.";

        // Return focus to the Full Name field.
        const nameInput = document.getElementById("full-name");

        if (nameInput) {
            nameInput.focus();
        }

        console.log("Quote request returned to editing.");

    });

}
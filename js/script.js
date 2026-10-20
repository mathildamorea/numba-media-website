"use strict";

// Numba Media - Assessment 4
// JavaScript functionality

console.log("Numba Media JavaScript loaded successfully.");

// ========================================
// Feature 1 - Service Quote Estimator
// ========================================

// Illustrative hourly rates in PGK
const serviceRates = {
    video: 350,
    photo: 250,
    drone: 400,
    live: 500,
    editing: 200
};

// Find the estimator elements
const serviceSelect = document.getElementById("estimate-service");
const hoursInput = document.getElementById("estimate-hours");
const calculateButton = document.getElementById("calculate-estimate");
const estimateResult = document.getElementById("estimate-result");

// Only run this feature when the estimator exists
if (serviceSelect && hoursInput && calculateButton && estimateResult) {

    calculateButton.addEventListener("click", function () {

        const selectedService = serviceSelect.value;
        const hours = Number(hoursInput.value);

        // Validate user inputs
        if (!selectedService) {
            estimateResult.textContent = "Please select a service.";
            return;
        }

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

        // Calculate the estimate
        const hourlyRate = serviceRates[selectedService];
        const total = hourlyRate * hours;

        // Display the result
        estimateResult.textContent =
            "Estimated Cost: K" + total.toFixed(2) +
            " (illustrative estimate only)";
    });
}
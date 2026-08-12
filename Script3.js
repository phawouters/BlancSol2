// JavaScript source code

// TweePutten.html: mutually exclusive "Optie 1" / "Optie 2" checkboxes.
// Only one of the two can be checked at a time (radio-button-like behavior),
// and unchecking the active one re-checks it so at least one always stays checked.
document.addEventListener("DOMContentLoaded", function () {
    var optie1 = document.getElementById("optie1");
    var optie2 = document.getElementById("optie2");

    if (optie1 && optie2) {
        // If Optie 1 is checked, uncheck Optie 2; if the user tries to uncheck
        // Optie 1 directly, force it back to checked (keep exactly one selected).
        optie1.addEventListener("change", function () {
            if (optie1.checked) {
                optie2.checked = false;
            } else {
                optie1.checked = true;
            }
        });

        // Same logic in reverse for Optie 2.
        optie2.addEventListener("change", function () {
            if (optie2.checked) {
                optie1.checked = false;
            } else {
                optie2.checked = true;
            }
        });
    }
});

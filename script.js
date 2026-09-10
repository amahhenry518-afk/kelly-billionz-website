/* =====================================================
   KELLY BILLIONZ
   WEBSITE JAVASCRIPT
===================================================== */

"use strict";


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");
    const menuButton = document.querySelector(".menu-btn");

    if (!navMenu) {
        return;
    }

    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    if (menuButton) {
        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    }
}


/* =====================================================
   PAGE READY
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const navMenu =
        document.getElementById("navMenu");

    const menuButton =
        document.querySelector(".menu-btn");

    const navLinks =
        document.querySelectorAll("#navMenu a");

    const registrationForm =
        document.getElementById("registrationForm");

    const successMessage =
        document.getElementById("successMessage");


    /* =================================================
       CLOSE MOBILE MENU WHEN LINK IS CLICKED
    ================================================= */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navMenu) {
                navMenu.classList.remove("active");
            }

            if (menuButton) {
                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    });


    /* =================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ================================================= */

    document.addEventListener("click", function (event) {

        if (!navMenu || !menuButton) {
            return;
        }

        const clickedInsideMenu =
            navMenu.contains(event.target);

        const clickedMenuButton =
            menuButton.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {

            navMenu.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /* =================================================
       REGISTRATION FORM
    ================================================= */

    if (registrationForm && successMessage) {

        registrationForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* Browser validation */

                if (!registrationForm.checkValidity()) {

                    registrationForm.reportValidity();

                    return;
                }


                /* Hide form */

                registrationForm.style.display = "none";


                /* Show success message */

                successMessage.hidden = false;


                /* Scroll to success message */

                setTimeout(function () {

                    successMessage.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }, 100);

            }
        );

    }

});


/* =====================================================
   CLOSE SUCCESS MESSAGE
===================================================== */

function closeSuccess() {

    const registrationForm =
        document.getElementById("registrationForm");

    const successMessage =
        document.getElementById("successMessage");


    if (!registrationForm || !successMessage) {
        return;
    }


    /* Hide success */

    successMessage.hidden = true;


    /* Show form */

    registrationForm.style.display = "flex";


    /* Reset form */

    registrationForm.reset();


    /* Return to form */

    registrationForm.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}
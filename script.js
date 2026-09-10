```javascript
/* =========================================================
   KELLY BILLIONZ — MAIN JAVASCRIPT
   ========================================================= */


/* =========================
   MOBILE NAVIGATION
   ========================= */

function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    const menuButton = document.querySelector(".menu-btn");

    if (!navMenu || !menuButton) return;

    const isOpen = navMenu.classList.toggle("active");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
    );

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}


/* Close mobile menu when a navigation link is clicked */

document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {

        const navMenu = document.getElementById("navMenu");
        const menuButton = document.querySelector(".menu-btn");

        if (!navMenu || !menuButton) return;

        navMenu.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    });
});


/* Close menu when clicking outside it */

document.addEventListener("click", (event) => {

    const navMenu = document.getElementById("navMenu");
    const menuButton = document.querySelector(".menu-btn");

    if (!navMenu || !menuButton) return;

    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedMenuButton &&
        navMenu.classList.contains("active")
    ) {

        navMenu.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    }
});


/* =========================
   REGISTRATION FORM
   ========================= */

const signupForm = document.getElementById("signupForm");
const successMessage = document.getElementById("successMessage");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();


        /* Get form fields */

        const fullname = document.getElementById("fullname");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const password = document.getElementById("password");
        const confirmPassword =
            document.getElementById("confirmPassword");
        const agreement =
            document.getElementById("agreement");


        /* Basic validation */

        if (!fullname.value.trim()) {
            showFormError(
                fullname,
                "Please enter your full name."
            );
            return;
        }


        if (!email.value.trim()) {
            showFormError(
                email,
                "Please enter your email address."
            );
            return;
        }


        if (!isValidEmail(email.value)) {
            showFormError(
                email,
                "Please enter a valid email address."
            );
            return;
        }


        if (!phone.value.trim()) {
            showFormError(
                phone,
                "Please enter your phone number."
            );
            return;
        }


        if (password.value.length < 8) {
            showFormError(
                password,
                "Password must contain at least 8 characters."
            );
            return;
        }


        if (password.value !== confirmPassword.value) {
            showFormError(
                confirmPassword,
                "Passwords do not match."
            );
            return;
        }


        if (!agreement.checked) {
            alert(
                "Please confirm that you agree to follow the community rules."
            );
            return;
        }


        /* If everything is valid */

        signupForm.hidden = true;

        if (successMessage) {
            successMessage.hidden = false;

            successMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

    });
}


/* =========================
   EMAIL VALIDATION
   ========================= */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}


/* =========================
   FORM ERROR
   ========================= */

function showFormError(input, message) {

    input.focus();

    input.classList.add("input-error");

    alert(message);

    setTimeout(() => {
        input.classList.remove("input-error");
    }, 2000);
}


/* =========================
   CLOSE SUCCESS MESSAGE
   ========================= */

function closeSuccess() {

    if (!successMessage || !signupForm) return;

    successMessage.hidden = true;

    signupForm.hidden = false;

    signupForm.reset();

    signupForm.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =========================
   PASSWORD VISIBILITY
   ========================= */

function createPasswordToggle(inputId) {

    const input = document.getElementById(inputId);

    if (!input) return;

    const wrapper = input.parentElement;

    if (!wrapper) return;

    wrapper.classList.add("password-wrapper");

    const button = document.createElement("button");

    button.type = "button";
    button.className = "password-toggle";
    button.setAttribute("aria-label", "Show password");
    button.textContent = "Show";

    wrapper.appendChild(button);

    button.addEventListener("click", () => {

        const isPassword =
            input.type === "password";

        input.type =
            isPassword ? "text" : "password";

        button.textContent =
            isPassword ? "Hide" : "Show";

        button.setAttribute(
            "aria-label",
            isPassword ? "Hide password" : "Show password"
        );
    });
}


/* Create password visibility controls */

createPasswordToggle("password");
createPasswordToggle("confirmPassword");


/* =========================
   SMOOTH SCROLLING
   ========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


/* =========================
   CURRENT YEAR
   ========================= */

const currentYear = new Date().getFullYear();

document.querySelectorAll("footer p").forEach((paragraph) => {

    if (paragraph.textContent.includes("2026")) {

        paragraph.textContent =
            paragraph.textContent.replace(
                "2026",
                currentYear
            );
    }
});


/* =========================
   ESCAPE KEY
   ========================= */

document.addEventListener("keydown", (event) => {

    if (event.key !== "Escape") return;

    const navMenu =
        document.getElementById("navMenu");

    const menuButton =
        document.querySelector(".menu-btn");

    if (!navMenu || !menuButton) return;

    navMenu.classList.remove("active");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );
});
```

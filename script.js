
// =========================================
// PAGE LOADER
// =========================================

window.addEventListener("load", () => {
    const loader = document.getElementById("pageLoader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("loaded");
        }, 650);
    }
});


// =========================================
// CURRENT YEAR
// =========================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =========================================
// MOBILE NAVIGATION
// =========================================

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuToggle.classList.toggle("open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    // Close menu after selecting a link
    navigation.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// =========================================
// HEADER SCROLL EFFECT
// =========================================

const header = document.getElementById("siteHeader");

if (header) {
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 30);
    });
}


// =========================================
// SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => observer.observe(element));

} else {

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}


// =========================================
// ACTIVE NAVIGATION
// =========================================

const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNavigation() {

    const currentSection = window.location.hash || "#home";

    navLinks.forEach(link => {

        const linkTarget = link.getAttribute("href");

        link.classList.toggle(
            "active",
            linkTarget === currentSection
        );

    });
}

window.addEventListener("hashchange", updateActiveNavigation);

updateActiveNavigation();


// =========================================
// SECTION 3: BANKING LAW INTERACTIVE TABS
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const bankingTabs = document.querySelectorAll("[data-banking-tab]");
    const bankingPanels = document.querySelectorAll("[data-banking-panel]");

    bankingTabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const selectedTab = tab.dataset.bankingTab;

            bankingTabs.forEach(function (button) {

                const isActive = button === tab;

                button.classList.toggle("active", isActive);

                button.setAttribute(
                    "aria-selected",
                    isActive ? "true" : "false"
                );

                button.setAttribute(
                    "tabindex",
                    isActive ? "0" : "-1"
                );

            });

            bankingPanels.forEach(function (panel) {

                const isSelected =
                    panel.dataset.bankingPanel === selectedTab;

                panel.classList.toggle("active", isSelected);
                panel.hidden = !isSelected;

            });

        });

    });

});

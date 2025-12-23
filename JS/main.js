// Random colour CSS variable
const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
document.documentElement.style.setProperty('--random', randomColor);

// Navbar toggle
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navView = navToggle.nextElementSibling;
    const toggleIcon = document.getElementById("nav-toggle");
    navToggle.addEventListener("click", (e) => {
        if (toggleIcon.classList.contains("fa-minus")) {
            toggleIcon.classList.remove("fa-minus");
            toggleIcon.classList.add("fa-plus");
        } else {
            toggleIcon.classList.remove("fa-plus");
            toggleIcon.classList.add("fa-minus");
        }
        navView.classList.toggle("open");
    })
})

// Navbar hierarchy Accordion
document.addEventListener('DOMContentLoaded', function() {
    // Select all the 'acc1-header' elements (the clickable headers)
    const headers = document.querySelectorAll('.acc1-header');

    // Loop through each header to add event listeners
    headers.forEach(header => {
        // Find the icon within the current header
        const icon = header.querySelector('i');
        // Find the content associated with the current header
        const content = header.nextElementSibling;

        // Add a click event listener to the icon
        icon.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click from bubbling up to the header

            // Toggle the icon class
            if (icon.classList.contains('fa-plus')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }

            // Toggle the content visibility
            content.classList.toggle('open');
        });
    });
})

// Navbar active link
document.querySelectorAll(".nav-link").forEach(link => {
    const currentUrl = window.location.href.split('#')[0];
    const linkUrl = link.href.split('#')[0];
    if(linkUrl === currentUrl){
        link.setAttribute("aria-current", "page");
    }
})

// Navbar auto-close
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navView = navToggle.nextElementSibling;
    const toggleIcon = document.getElementById("nav-toggle");

    function enforceCollapsedOnSmall() {
        if (window.innerWidth <= 1024) {
            if (navView) navView.classList.remove("open");
            if (toggleIcon) {
                toggleIcon.classList.remove("fa-minus");
                toggleIcon.classList.add("fa-plus");
            }
        }
    }
    
    enforceCollapsedOnSmall();
    window.addEventListener("resize", enforceCollapsedOnSmall);
});

// Weapon Schematic Accordion
document.addEventListener("DOMContentLoaded", () => {
    const accHeaders = document.querySelectorAll(".header-acc1-2");

    accHeaders.forEach(accHeader => {
        const accContent = accHeader.nextElementSibling;
        const accIcon = accHeader.querySelector("i");

        accHeader.addEventListener("click", (e) => {
            e.stopPropagation;
        
            if (accIcon.classList.contains("fa-plus")) {
                accIcon.classList.remove("fa-plus");
                accIcon.classList.add("fa-minus");
            } else {
                accIcon.classList.remove("fa-minus");
                accIcon.classList.add("fa-plus");
            }

            accContent.classList.toggle("open");
        })
    })
})

// Re-con Protocols Accordion
document.addEventListener("DOMContentLoaded", () => {
    const reconHeaders = document.querySelectorAll(".header-acc-recon");

    reconHeaders.forEach(reconHeader => {
        const reconContent = reconHeader.nextElementSibling;
        const reconIcon = reconHeader.querySelector("i");

        reconHeader.addEventListener("click", (e) => {
            e.stopPropagation();

            // Close any other open recon contents (and reset their icons)
            reconHeaders.forEach(otherHeader => {
                if (otherHeader === reconHeader) return;
                const otherContent = otherHeader.nextElementSibling;
                const otherIcon = otherHeader.querySelector("i");
                if (otherContent && otherContent.classList.contains("open")) {
                    otherContent.classList.remove("open");
                    if (otherIcon) {
                        otherIcon.classList.remove("fa-minus");
                        otherIcon.classList.add("fa-plus");
                    }
                }
            });

            // Toggle the clicked one
            if (reconIcon) {
                if (reconIcon.classList.contains("fa-plus")) {
                    reconIcon.classList.remove("fa-plus");
                    reconIcon.classList.add("fa-minus");
                } else {
                    reconIcon.classList.remove("fa-minus");
                    reconIcon.classList.add("fa-plus");
                }
            }

            if (reconContent) reconContent.classList.toggle("open");
        });
    });
})

// Department 'how to join' Accordion
document.addEventListener("DOMContentLoaded", () => {
    const deptjoinHeaders = document.querySelectorAll(".deptjoin-pic");

    deptjoinHeaders.forEach(deptjoinHeader => {
        const deptjoinContent = deptjoinHeader.nextElementSibling;

        deptjoinHeader.addEventListener("click", (e) => {
            e.stopPropagation();

            deptjoinContent.classList.toggle("active");
        })
    })
})

// Document preview Accordion
document.addEventListener("DOMContentLoaded", () => {
    const docPrevHeaders = document.querySelectorAll(".preview-title");

    docPrevHeaders.forEach(docPrevHeader => {
        const docPrevContent = docPrevHeader.nextElementSibling;
        const docPrevIcon = docPrevHeader.querySelector("i");

        docPrevHeader.addEventListener("click", (e) => {
            e.stopPropagation();

            docPrevContent.classList.toggle("active");
            if (docPrevIcon.classList.contains("fa-plus")) {
                docPrevIcon.classList.remove("fa-plus");
                docPrevIcon.classList.add("fa-minus");
            } else {
                docPrevIcon.classList.remove("fa-minus");
                docPrevIcon.classList.add("fa-plus");
            }
        })
    })
})

// Patreon unavailable (temporary)
document.addEventListener("DOMContentLoaded", () => {
    const patreon = document.getElementById("patreon");
    patreon.addEventListener("click", (e) => {
        alert("The Facilities & Logistics Office Patreon is currently unavailable.");
    })
})

// Comment
document.addEventListener("DOMContentLoaded", () => {
    console.log("hey, developer or adventurer! what brings you here?");
})
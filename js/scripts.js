
window.addEventListener("scroll",
    function() {
        let navArea = document.getElementById('navigation');
        if (window.pageYOffset > 0) {
            navArea.classList.add("navbg");
        } else {
            navArea.classList.remove("navbg");
        }
    });

const windowWidth = window.matchMedia("(max-width: 550px)");
windowWidth.addEventListener('change', function(mm) {
    checkResponsiveWidth(windowWidth);
});

window.onload = (event) => {
    const windowWidth = window.matchMedia("(max-width: 550px)");
    checkResponsiveWidth(windowWidth);
}

function checkResponsiveWidth(width) {
    if (width.matches) {
        document.getElementById('nav-mobile_list').addEventListener('click', function() {
            const mobileNavCheckbox = document.getElementById('nav-mobile_checkbox');
            if (mobileNavCheckbox.checked) {
                mobileNavCheckbox.checked = false;
            }
        });
    }
}
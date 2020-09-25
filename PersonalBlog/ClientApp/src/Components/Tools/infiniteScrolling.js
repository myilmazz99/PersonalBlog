
function infiniteScrolling(fetch, page) {
    document.addEventListener("scroll", function () {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            fetch(page + 1);
            return true;
        }

        return false;
    });
}
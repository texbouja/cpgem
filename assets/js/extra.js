document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("article a").forEach(function (link) {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        }
    });
});

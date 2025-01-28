const links = Array.from(document.querySelectorAll("a"));
const utm = document.location.search;
const salesPageUrl = "https://thrivefocus24.org/48/uricare";

localStorage.setItem("utm", JSON.stringify(utm));

window.history.replaceState({}, "", window.location.pathname);

links.forEach((link) => {
	link.href = `${salesPageUrl}${utm}`;
});

// Date

const today = new Date();
document.getElementById("date").textContent = today.toLocaleDateString(
	"pl-PL",
	{ year: "numeric", month: "2-digit", day: "2-digit" }
);

const setDate = (selector, daysBefore, withTextDay) => {
	const array = document.querySelectorAll(selector);

	const getDateBefore = (daysBefore) => {
		const utcNumber = new Date().getTime();
		const selectedDate = new Date(utcNumber - (daysBefore * 86400000));

		const days = {
			1: "poniedziałek",
			2: "wtorek",
			3: "środa",
			4: "czwartek",
			5: "piątek",
			6: "sobota",
			0: "niedziela",
		};

		const date = selectedDate.toLocaleDateString();
		const day = days[selectedDate.getDay()];

		return `${date}${withTextDay ? ` ${day}` : ''}`;
	};

	array.forEach((item) => {
		item.innerText = getDateBefore(daysBefore);
	});
};

setDate('.current-date', 0);
setDate('.date-before-1', 1, true);
setDate('.date-before-2', 2, true);
setDate('.date-before-3', 3, true);
setDate('.date-before-4', 4, true);
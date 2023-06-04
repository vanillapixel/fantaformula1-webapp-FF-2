import { useState, useEffect } from "react";

import Card from "./Card";

interface CountdownProps {
	targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
	const calculateTimeLeft = (): {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	} => {
		const difference = targetDate.getTime() - new Date().getTime();
		if (difference <= 0) {
			return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		}

		const seconds = Math.floor((difference / 1000) % 60);
		const minutes = Math.floor((difference / 1000 / 60) % 60);
		const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
		const days = Math.floor(difference / (1000 * 60 * 60 * 24));

		return { days, hours, minutes, seconds };
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		return () => clearInterval(intervalId);
	}, [targetDate]);

	const cardItems = [
		{
			label: "days",
			value: timeLeft.days,
		},
		{
			label: "hours",
			value: timeLeft.hours.toString().padStart(2, "0"),
		},
		{
			label: "minutes",
			value: timeLeft.minutes.toString().padStart(2, "0"),
		},
		{
			label: "seconds",
			value: timeLeft.seconds.toString().padStart(2, "0"),
		},
	];

	return <Card items={cardItems} />;
};

export default Countdown;

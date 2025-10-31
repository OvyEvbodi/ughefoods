"use client";


import React, { useEffect, useState } from "react";


export default function Page() {
const targetDate = new Date("2025-12-01T00:00:00").getTime();
const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });


useEffect(() => {
const interval = setInterval(() => {
const now = new Date().getTime();
const difference = targetDate - now;


if (difference > 0) {
setTimeLeft({
days: Math.floor(difference / (1000 * 60 * 60 * 24)),
hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
minutes: Math.floor((difference / (1000 * 60)) % 60),
seconds: Math.floor((difference / 1000) % 60),
});
} else {
setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
clearInterval(interval);
}
}, 1000);


return () => clearInterval(interval);
}, []);


return (
<main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 text-center px-6">
<img
src="/logo.jpg"
alt="Ughe Foods logo"
className="w-28 h-28 mb-6"
/>


<h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black">
UGHE FOODS
</h1>


<p className="mt-3 text-lg sm:text-xl font-medium text-gray-600">
Healthy replacements — protein-rich yoghurt & chicken
</p>


<div className="mt-10 rounded-2xl p-8 bg-gradient-to-b from-white to-gray-50 border border-gray-100 shadow-lg">
<h2 className="text-3xl sm:text-4xl font-bold text-[#0B3B6F] mb-4">We're Launching Soon!</h2>


<div className="flex justify-center gap-6 text-[#0B3B6F] font-semibold text-2xl sm:text-3xl">
<div className="flex flex-col items-center">
<span>{timeLeft.days}</span>
<span className="text-sm text-gray-500">Days</span>
</div>
<div className="flex flex-col items-center">
<span>{timeLeft.hours}</span>
<span className="text-sm text-gray-500">Hours</span>
</div>
<div className="flex flex-col items-center">
<span>{timeLeft.minutes}</span>
<span className="text-sm text-gray-500">Minutes</span>
</div>
<div className="flex flex-col items-center">
<span>{timeLeft.seconds}</span>
<span className="text-sm text-gray-500">Seconds</span>
</div>
</div>
<br></br>
<div className="text-sm text-gray-500">In the meantime, you can place an order via our social media platforms</div>
<div className="mt-8 flex justify-center gap-4">
  <a
    href="https://www.instagram.com/ughe_foods"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-md px-6 py-3 bg-[#0B3B6F] text-white font-medium shadow hover:opacity-90 transition"
  >
    Instagram
  </a>

  <a
    href="https://www.tiktok.com/@ughe_foods"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-md px-6 py-3 border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 transition"
  >
    TikTok
  </a>
</div>

</div>


<footer className="mt-8 text-sm text-gray-500">
© {new Date().getFullYear()} Ughe Foods — All rights reserved
</footer>
</main>
);
}
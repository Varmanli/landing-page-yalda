// تاریخ مورد نظر برای شمارش معکوس
const targetDate = new Date("2024-12-30T00:00:00").getTime();

// تابع تبدیل اعداد لاتین به فارسی
function convertToPersianNumbers(str) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.replace(/[0-9]/g, (digit) => persianDigits[digit]);
}

// به‌روزرسانی تایمر هر ثانیه
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    document.querySelector(".timer").innerHTML = "زمان به پایان رسید!";
    return;
  }

  // محاسبه روز، ساعت، دقیقه و ثانیه
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // تبدیل اعداد به فارسی و نمایش در HTML
  document.getElementById("days").textContent = convertToPersianNumbers(
    days.toString().padStart(2, "0")
  );
  document.getElementById("hours").textContent = convertToPersianNumbers(
    hours.toString().padStart(2, "0")
  );
  document.getElementById("minutes").textContent = convertToPersianNumbers(
    minutes.toString().padStart(2, "0")
  );
  document.getElementById("seconds").textContent = convertToPersianNumbers(
    seconds.toString().padStart(2, "0")
  );
}, 1000);


// پیدا کردن عکس ها
const slides = document.querySelectorAll(".slide");

// پیدا کردن فلش ها
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

// پیدا کردن نقطه ها
const dots = document.querySelectorAll(".dot");

// پیدا کردن کل بخش اسلایدر
const heroSection = document.querySelector(".hero-section");

// شماره عکس فعلی
let currentSlide = 0;

// متغیر نگهداری زمان بندی اسلایدر
let autoPlay;


// تابع نمایش عکس
function showSlide(index) {

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}


// تابع رفتن به عکس بعدی
function goToNextSlide() {

    let nextIndex = (currentSlide + 1) % slides.length;

    showSlide(nextIndex);
}


// کلیک روی فلش بعدی
nextButton.addEventListener("click", function() {
    goToNextSlide();
});


// کلیک روی فلش قبلی وبعدی
prevButton.addEventListener("click", function() {

    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;

    showSlide(prevIndex);
});


// کلیک بکنیم رو نقطه ها بره رو همون عکس
dots.forEach((dot, index) => {

    dot.addEventListener("click", function() {
        showSlide(index);
    });

});


// شروع نمایش خودکار عکس ها
function startAutoPlay() {

    autoPlay = setInterval(goToNextSlide, 4000);

}


// توقف نمایش خودکار عکس ها
function stopAutoPlay() {

    clearInterval(autoPlay);

}


// اعکس ها خودکار نمایش داده میشن
startAutoPlay();


// اسلایدر وقتی ماوس بیاد روش متوقف بشه 
heroSection.addEventListener("mouseenter", stopAutoPlay);


// شروع دوباره اسلایدر وقتی ماوس رو میکشیم کنار
heroSection.addEventListener("mouseleave", startAutoPlay);


// منوی همبرگری
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const menuOverlay = document.querySelector(".menu-overlay");
menuToggle.addEventListener("click", function() {
    mainNav.classList.toggle("show");
    menuOverlay.classList.toggle("active");
});
const menuClose = document.querySelector(".menu-close");

//بسته شدن منوی همبرگر همون ضبدره 
menuClose.addEventListener("click", function() {
    mainNav.classList.remove("show");
    menuOverlay.classList.remove("active");
});
// کلیک کنیم خارج منو، منو بسته بfشه
menuOverlay.addEventListener("click", function() {
    mainNav.classList.remove("show");
    menuOverlay.classList.remove("active");
});
// فرم تماس فوتر
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {

    // جلوگیری از ارسال و رفرش شدن صفحه
    event.preventDefault();

    // دریافت مقادیر ورودی‌ها
    const name = document.querySelector("#customer-name").value.trim();
    const email = document.querySelector("#customer-email").value.trim();
    const message = document.querySelector("#customer-message").value.trim();

    // بررسی خالی بودن فیلدها
    if (name === "" || email === "" || message === "") {
        alert("لطفاً تمام فیلدها را پر کنید.");
        return;
    }

    // بررسی فرمت ایمیل
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("لطفاً یک ایمیل معتبر وارد کنید.");
        return;
    }

    // پیام موفقیت
    alert("پیام شما با موفقیت ثبت شد. ممنون از ارتباط شما ❤️");

    // پاک کردن فرم
    contactForm.reset();

});

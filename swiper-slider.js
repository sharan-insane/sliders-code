const swiper = new Swiper('.ilp2-swiper-monster-trades', {
        slidesPerView: 2, // Show 2 slides per view
        spaceBetween: 10, // Optional: space between slides in pixels
        loop: true,       // Enable continuous loop mode
        autoplay: {
            delay: 4000,  // 4 seconds delay between slides
            disableOnInteraction: false, // Keep autoplaying after interaction
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Make pagination bullets clickable
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

console.log("code ffrom github")

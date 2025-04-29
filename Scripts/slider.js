let index = 0;
        const slidesToShow = 3;
        const slides = document.querySelectorAll(".slide");
        const totalSlides = slides.length;

        function showSlide(i) {
            index = (i + totalSlides) % totalSlides;
            document.querySelector(".slider").style.transform = `translateX(-${index * (100 / slidesToShow)}%)`;
        }

        document.querySelector(".prev").addEventListener("click", () => showSlide(index - slidesToShow));
        document.querySelector(".next").addEventListener("click", () => showSlide(index + slidesToShow));

        setInterval(() => showSlide(index + slidesToShow), 10000);
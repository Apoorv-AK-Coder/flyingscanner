const products = [
    { image: "/newimages/blogs/where-can-i-find-hotels-with-a-jacuzzi-in-the-room-near-me.jpg", name: "Where Can I Find Hotels with a Jacuzzi in the Room Near Me?", para: "A Jacuzzi in the room is a relaxing amenity for all of us, but sometimes people cannot find hotels offering...", link: "https://www.flyingscanner.com/blog/where-can-i-find-hotels-with-a-jacuzzi-in-the-room-near-me" },
    { image: "/newimages/blogs/cruise-for-less-the-best-ways-to-find-last-minute-cruise-deals.jpg", name: "Cruise for Less: The Best Ways to Find Last-Minute Cruise Deals", para: "Cruise booking for less? Is this possible? If you want to sail for affordable prices and unlock extraordinary savings...", link: "https://www.flyingscanner.com/blog/cruise-for-less-the-best-ways-to-find-last-minute-cruise-deals" },
    { image: "/newimages/blogs/how-do-you-book-affordable-last-minute-cruises-from-florida.jpg", name: "How do you book affordable last-minute cruises from Florida?", para: "Last-minute cruise booking surprises many people because they cannot find affordable pricing. What do you think about...", link: "https://www.flyingscanner.com/blog/how-do-you-book-affordable-last-minute-cruises-from-florida" },
    { image: "/newimages/blogs/first-time-charter-your-complete-guide-to-renting-a-yacht-in-miami.jpg", name: "First-Time Charter? Your Complete Guide to Renting a Yacht in Miami", para: "Spending time on a rented yacht in Miami is sure to give you an amazing feeling of luxury, freedom and fabulous views...", link: "https://www.flyingscanner.com/blog/how-to-book-the-perfect-yacht-rental-in-fort-lauderdale" },
    { image: "/newimages/blogs/how-to-get-insane-discounts-on-last-minute-cruise-bookings.jpg", name: "How to Get Insane Discounts on Last-Minute Cruise Bookings", para: "Itâ€™s possible to sail away last minute and still be on a budget. The truth is, that cruise companies are very eager to...", link: "https://www.flyingscanner.com/blog/secret-tricks-to-finding-cheap-last-minute-hotel-stays" },
    { image: "/newimages/blogs/how-to-book-the-perfect-yacht-rental-in-fort-lauderdale.jpg", name: "How to Book the Perfect Yacht Rental in Fort Lauderdale", para: "Fort Lauderdale attracts people who love yachts due to its many beautiful waterways, colourful marinas and warm weather...", link: "https://www.flyingscanner.com/blog/how-to-get-insane-discounts-on-last-minute-cruise-bookings" },
    { image: "/newimages/blogs/how-to-find-the-best-yacht-rentals-near-me-expert-tips.jpg", name: "How to Find the Best Yacht Rentals Near Meâ€”Expert Tips", para: "Renting a yacht gives you the chance to relax in style, regardless of whether youâ€™re celebrating or just having a normal...", link: "https://www.flyingscanner.com/blog/plan-a-quick-cruise-trip-last-minute-deals-from-galveston" },
    { image: "/newimages/blogs/plan-a-quick-cruise-trip-last-minute-deals-from-galveston.jpg", name: "Plan a Quick Cruise Trip: Last-Minute Deals from Galveston", para: "Travellers in the Gulf of Mexico now head to Galveston to enjoy easy access to tropical destinations, with fewer long time...", link: "https://www.flyingscanner.com/blog/top-tips-for-booking-the-perfect-yacht-rental-in-chicago" },
    { image: "/newimages/blogs/secret-tricks-to-finding-cheap-last-minute-hotel-stays.jpg", name: "Secret Tricks to Finding Cheap Last-Minute Hotel Stays", para: "Unexpected travel doesnâ€™t always mean you have to pay top prices for your room. If you follow some rules and have helpful...", link: "https://www.flyingscanner.com/blog/how-to-find-the-best-yacht-rentals-near-me-expert-tips" },
    { image: "/newimages/blogs/top-tips-for-booking-the-perfect-yacht-rental-in-chicago.jpg", name: "Top Tips for Booking the Perfect Yacht Rental in Chicago", para: "Taking a boat out on the beautiful Lake Michigan is an experience that everyone in Chicago knows. You can find...", link: "https://www.flyingscanner.com/blog/where-can-i-book-hotels-with-pools-near-me" },
    { image: "/newimages/blogs/where-can-i-book-hotels-with-pools-near-me.jpg", name: "Where Can I Book Hotels with Pools Near Me?", para: "Relaxation in summer or anytime you need a break is made much better by having pool access in your room. If youâ€™re...", link: "https://www.flyingscanner.com/blog/first-time-charter-your-complete-guide-to-renting-a-yacht-in-miami" },
    { image: "/newimages/blogs/best-car-rental-san-juan-puerto-rico-deals-for-travellers.jpg", name: "Best Car Rental San Juan Puerto Rico Deals for Travellers", para: "The most ideal method of exploring the beautiful capital of Puerto Rico as well as the mind-blowing coasts is to make", link: "https://www.flyingscanner.com/blog/best-car-rental-san-juan-puerto-rico-deals-for-travellers" },
    { image: "/newimages/blogs/best-cruise-port-hotels-in-miami-florida-that-travellers-enjoy.jpg", name: "Best Cruise Port Hotels in Miami, Florida, that Travellers Enjoy", para: "Whether one is planning to depart at a cruise port considered to be amongst the busiest in the world, it is important", link: "https://www.flyingscanner.com/blog/best-cruise-port-hotels-in-miami-florida-that-travellers-enjoy" },
    { image: "/newimages/blogs/best-hotels-near-gillette-stadium-to-stay-in-during-games-and-weekends.jpg", name: "Best Hotels near Gillette Stadium to Stay in During Games and Weekends", para: "Gillette Stadium is not only a place but also the centre of exciting weekends, breathtaking football matches, and", link: "https://www.flyingscanner.com/blog/best-hotels-near-gillette-stadium-to-stay-in-during-games-and-weekends" },
    { image: "/newimages/blogs/get-affordable-hotel-stays-near-tampa-airport-with-relaxation.jpg", name: "Best Room Hot Tub Hotels in Las Vegas for Couples", para: "A Las Vegas vacation is already exciting, but when you include a hot tub in your hotel room that is privately kept,", link: "https://www.flyingscanner.com/blog/get-affordable-hotel-stays-near-tampa-airport-with-relaxation" },
    { image: "/newimages/blogs/best-room-hot-tub-hotels-in-las-vegas-for-couples.jpg", name: "Find Hotels near Miami Cruise Port where Boarding Will be Easy", para: "Cruise vacation planning in the colourful Port of Miami begins with the best hotel stay near it. By booking the", link: "https://www.flyingscanner.com/blog/best-room-hot-tub-hotels-in-las-vegas-for-couples" },
    { image: "/newimages/blogs/luxury-hotels-with-indoor-pools-near-me-for-a-chicago-trip.jpg", name: "Get Affordable Hotel Stays near Tampa Airport with Relaxation", para: "Tampa is a place with year-round sunny skies that attracts travellers. Connected carriers or starting a well-deserved", link: "https://www.flyingscanner.com/blog/luxury-hotels-with-indoor-pools-near-me-for-a-chicago-trip" },
    { image: "/newimages/blogs/find-hotels-near-miami-cruise-port-where-boarding-will-be-easy.jpg", name: "Luxury Hotels with Indoor Pools near me for a Chicago Trip", para: "The skyline of Chicago, its lakefront location, and its global attractions qualify it as a place to visit when one", link: "https://www.flyingscanner.com/blog/find-hotels-near-miami-cruise-port-where-boarding-will-be-easy" },
    { image: "/newimages/blogs/top-10-best-hotels-in-rome-for-luxurious-stays.jpg", name: "Romantic Hotels with Jacuzzis in Rooms in Gatlinburg, Tennessee", para: "Gatlinburg, Tennessee, is an up-in-the-clouds mountain getaway where romance is in the air in the forested pathways,", link: "https://www.flyingscanner.com/blog/top-10-best-hotels-in-rome-for-luxurious-stays" },
    { image: "/newimages/blogs/romantic-hotels-with-jacuzzis-in-rooms-in-gatlinburg-tennessee.jpg", name: "Top 10 Best Hotels in Rome for Luxurious Stays", para: "The city of Rome â€“ a perfect blend of history, grace and beauty â€“ is home to some of the most magnificent hotels", link: "https://www.flyingscanner.com/blog/romantic-hotels-with-jacuzzis-in-rooms-in-gatlinburg-tennessee" },
    { image: "/newimages/blogs/top-hotels-near-arrowhead-stadium-to-stay-during-the-game-day.jpg", name: "Top Hotels near Arrowhead Stadium to Stay During the Game Day", para: "In Kansas City, game day is an experience occasion, not merely a football game, powered with energy, fans and", link: "https://www.flyingscanner.com/blog/top-hotels-near-arrowhead-stadium-to-stay-during-the-game-day" }
];

const productContainer = document.querySelector(".product-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageNumberSpan = document.getElementById("page-number");
const searchInput = document.querySelector(".search-column input[type='search']");
const pagination = document.querySelector(".pagination1");

const productsPerPage = 9;
let currentPage = 1;
let showAllPages = false;
let currentProducts = [...products];

function renderProducts() {
    productContainer.innerHTML = "";
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const pageItems = currentProducts.slice(start, end);

    pageItems.forEach(product => {
        productContainer.innerHTML += `
      <div class="product">
        <div class="column">
          <img src="${product.image}" alt="${product.name}">
          <div class="innerblog">
            <h4>${product.name}</h4>
            <p>${product.para}</p>
            <p style="margin-top: 5px !important;">
              <a href="${product.link}">Read More <i class="fa-solid fa-angles-right"></i></a>
            </p>
          </div>
        </div>
      </div>
    `;
    });

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(currentProducts.length / productsPerPage);
    pagination.style.display = totalPages > 1 && currentProducts.length !== products.length ? "none" : "flex";

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    pageNumberSpan.innerHTML = "";

    if (showAllPages || totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) createPageBtn(i);
    } else {
        createPageBtn(1);
        createPageBtn(2);
        createPageBtn(3);

        if (currentPage > 4) addEllipsis();
        if (currentPage > 3 && currentPage < totalPages - 2) createPageBtn(currentPage);
        if (currentPage < totalPages - 3) addEllipsis();

        createPageBtn(totalPages - 2);
        createPageBtn(totalPages - 1);
        createPageBtn(totalPages);
    }
}

function createPageBtn(num) {
    const btn = document.createElement("button");
    btn.textContent = num;
    if (num === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
        currentPage = num;
        renderProducts();
    });
    pageNumberSpan.appendChild(btn);
}

function addEllipsis() {
    const span = document.createElement("span");
    span.textContent = "...";
    span.classList.add("ellipsis");
    span.addEventListener("click", () => {
        showAllPages = true;
        updatePagination();
    });
    pageNumberSpan.appendChild(span);
}

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderProducts();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(currentProducts.length / productsPerPage)) {
        currentPage++;
        renderProducts();
    }
});

searchInput.addEventListener("input", () => {
    const term = searchInput.value.trim().toLowerCase();
    currentProducts = term
        ? products.filter(p => p.name.toLowerCase().includes(term))
        : [...products];

    currentPage = 1;
    showAllPages = false;
    pagination.style.display = term ? "none" : "flex";
    renderProducts();
});

renderProducts();
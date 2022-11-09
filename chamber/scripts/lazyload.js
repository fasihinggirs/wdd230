let imagesLoading = document.querySelectorAll("[data-src]");

const imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imageOptions);
    imagesLoading.forEach((img) => {
      observer.observe(img);
    });
  } 
else {
    imagesLoading.forEach((img) => {
      loadImages(img);
    });
  }
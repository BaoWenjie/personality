const priceElement = document.getElementById("price")
const urlSet = new URLSearchParams(window.location.search).get('set');

if (urlSet === "set1") {
    priceElement.textContent = "9.9"
} else if (urlSet === "set2") {
    priceElement.textContent = "19.9"
} else if (urlSet === "set3") {
    priceElement.textContent = "29.9"
}

const urlType = new URLSearchParams(window.location.search).get('type');


// Initialize PayPal Buttons
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: priceElement.textContent // 金额设定
                    // value:'0.01'
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            console.log('支付成功：' + details.payer.name.given_name);
            // 此处添加跳转逻辑到结果页
            window.location.href = `result-${urlType}.html`;
        });
    },
    onError: function(err) {
        console.error('支付遇到错误：' + err);
        // 可以添加错误处理逻辑
    }
}).render('#paypal-button-container');

document.addEventListener('DOMContentLoaded', function () {
    // 页面加载完成后，隐藏加载遮罩，显示内容
    window.onload = function () {
        document.getElementById('loading-overlay').style.display = 'none';
        // document.getElementById('content').style.display = 'block';
    };
});


//轮播图轮播图轮播图轮播图轮播图轮播图轮播图轮播图轮播图
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    if (index >= totalSlides) {
        slides.style.transition = 'none';
        slides.style.transform = `translateX(0%)`;
        currentSlide = 1; // set to the second slide (first clone)
        setTimeout(() => {
            slides.style.transition = 'transform 1s ease-in-out';
            slides.style.transform = `translateX(${-currentSlide * 100}%)`;
        }, 50);
    } else {
        slides.style.transform = `translateX(${-index * 100}%)`;
        currentSlide = index;
    }
}

// Automatically move to the next slide every second
setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 2500);


const scrollDivs = document.querySelectorAll('.hideDivBtn');

// Add a click event listener to each scroll-div
scrollDivs.forEach(div => {
    div.addEventListener('click', function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});









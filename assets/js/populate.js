import { nameList, uuids, services, products, genders, ages } from "./mock_data.js";

// var analytics = window.analytics = window.analytics || []; if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice."); else {
//     analytics.invoked = !0; analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware"]; analytics.factory = function (e) { return function () { var t = Array.prototype.slice.call(arguments); t.unshift(e); analytics.push(t); return analytics } }; for (var e = 0; e < analytics.methods.length; e++) { var key = analytics.methods[e]; analytics[key] = analytics.factory(key) } analytics.load = function (key, e) { var t = document.createElement("script"); t.type = "text/javascript"; t.async = !0; t.src = "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js"; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(t, n); analytics._loadOptions = e }; analytics._writeKey = "qJWRyazSx0EffWWuxLEL7jQpzYAZ2viF";; analytics.SNIPPET_VERSION = "4.15.3";
//     analytics.load("qJWRyazSx0EffWWuxLEL7jQpzYAZ2viF");
//     analytics.page();
// }

function viewService(service_name) {
    analytics.track('Service Interested', {
        service: service_name
    })
}

function viewQnA(no, ques, ans) {
    analytics.track('QnA Read', {
        no: no,
        question: ques,
        answer: ans,
    })
}

function viewProduct(prod) {
    analytics.track('Product Viewed', {
        product: prod
    })
}

function clickProduct(prod) {
    analytics.track('Product Clicked', {
        product: prod
    })
}

function bookTestDrive(prod) {
    var day = parseInt(Math.random() * 30 + 1);

    analytics.track('Test Drive Booked', {
        product: prod,
        date: new Date(2022, 7, day).toISOString(),
        time: new Date().toTimeString(),
    })
}

function purchase(prod) {
    var day = parseInt(Math.random() * 30 + 1);

    analytics.track('Car Purchased', {
        product: prod,
        date: new Date(2022, 7, day).toISOString(),
        time: new Date().toTimeString(),
        price: parseInt(100000 + Math.random() * 100000),
    })
}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function getRandomValues(n) {
    return Math.floor(Math.random() * n)
}

for (let i = 0; i < nameList.length; i++) {
    // var isPresent = Math.random() > 0.5
    analytics.page();
    // if (isPresent) {
    analytics.identify(uuids[i], {
        name: nameList[i],
        email: nameList[i].toLowerCase().split(" ").join("") + "@gmail.com",
        plan: (Math.random() > 0.5) ? "Premium" : "Freemium",
        gender: genders[i],
        age: ages[i],
    })

    viewService(services[getRandomValues(services.length)]);

    viewProduct(products[getRandomValues(products.length)]);

    clickProduct(products[getRandomValues(products.length)]);

    if (Math.random() > 0.8) {
        bookTestDrive(products[getRandomValues(products.length)]);
    }

    if (Math.random() > 0.9) {
        purchase(products[getRandomValues(products.length)]);
    }

    // }
}
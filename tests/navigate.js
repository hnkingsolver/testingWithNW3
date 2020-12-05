module.exports = {
    "navigate method": function(browser) {
        browser.url("https://www.google.com")
        //browser.url() has two functions, it takes you to the url, 
        //or if you put a callback function, it will give you the value of the current
        //url that you are on
        browser.url(function(result) {
            console.log(result.value)
        })
        //with browser.pause(), a cool thing you can do with it is not pass it any
        //mili-seconds and it will just hangout on the page forever... or until you terminate
        //it with "ctrl c". This is good for debugging, or if you get to a page you're
        //not familiar with yet, and need to poke around for testing purposes.
        browser.pause(2000)
    },
}
module.exports = {
    "click the button": function(browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/click.html")
        browser.pause(2000)
        //clicking on css selector
        browser.click("#surprise-button")
        browser.pause(2000)
        //put this at the end of every test
        browser.end()
    }
}
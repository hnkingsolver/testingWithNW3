module.exports = {
    "dropdown test": function(browser) {
        //connect to url
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/drop-down.html")

        //setValue just sends keys to inputs...
        //if we were to set the value to just "t", thor would still come up
        //However, if we sete the value to "Black", "Black Widow" would be selected over
        //"Black Pather"
        browser.setValue("#dropdown", "Thor")
        browser.pause(1000)

        //grabbing by .click() and using nth-child
        browser.click("#dropdown option:nth-child(3)")

        //looping through options on dropdown menu
        for(let i = 1; i <=4; i++) {
            browser.click(`#dropdown option:nth-child(${i})`)
            browser.pause(1000)
        }

        browser.end()
    },
}
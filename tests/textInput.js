module.exports = {
    // "set and clear text": function(browser) {
    //     browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html")
    //     browser.setValue("#text-input", "Nightwatch is cool yeeepoooorunie")
    //     browser.pause(2000)
    //     browser.clearValue("#text-input")
    //     browser.pause(2000)
    //     browser.end()
    // },
    "using keys":function(browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html")
        //same thing as setValue(), bit we have to use browser.click() then browser.keys()
        //so its just another way of doing things... kinda lame if you ask me
        //they are both using the selenium sendKeys method
        browser.click("#text-input")
        browser.keys("we're using keys")
        browser.pause(2000)
        //select all text in input field
        //browser.Keys.NULL basically lifts keys off keys
        browser.keys([
        browser.Keys.COMMAND, "a", 
        browser.Keys.NULL,
        browser.Keys.DELETE
        ])

        //can send an array of keys
        // browser.keys(["a", "b", "c", "1", "2", "3", ])


        browser.pause(2000)

        browser.end()
    }
}
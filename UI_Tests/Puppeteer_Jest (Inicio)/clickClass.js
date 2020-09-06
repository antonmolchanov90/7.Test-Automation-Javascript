class clickInicio {
   
   constructor(page) {
        this.page = page;
    }

    async clickButton () {
        await this.page.waitForSelector('#table63 > tbody > tr > td:nth-child(4) > p > a > img');
        await this.page.click('#table63 > tbody > tr > td:nth-child(4) > p > a > img');
        await this.page.waitFor(5000);
    }
}

module.exports = {
    clickInicio
};

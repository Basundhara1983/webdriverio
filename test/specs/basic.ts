const assert = require('assert')

describe('searchInEbay', () => {
    it('should have the right title', async () => {
        await browser.url('https://www.ebay.com/');
        const title = await browser.getTitle();
        console.log('title is '+ title);
        assert.equal(title, 'Electronics, Cars, Fashion, Collectibles & More | eBay');
    })

    it('Serach a product', async ()=>{
        const serachInput = await $('.gh-tb');
        const serchBtn = await $('#gh-btn');
        await serachInput.addValue("Laptop");
        await serchBtn.click()
        
        
    })
})
puppeteer=require('puppeteer');
let path = require("path");
/*puppeteer.launch().then(async browser =>{
    const page=await browser.newPage();

    await page.goto('https://loki52501.github.io/');
    await page.screenshot({path:'me.png',fullPage:true});
    await browser.close();
});*/
async function main(){
let page;
const browser = await puppeteer.launch({
    userDataDir:path.join(process.cwd(),'ChromeSession'),
});
page=await browser.newPage();
await page.goto('https://loki52501.github.io/');
await page.screenshot({path:'me.png',fullPage:true});
}

main();
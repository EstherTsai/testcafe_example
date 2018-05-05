import { Selector } from 'testcafe';

fixture `Example`
    .page `www.google.com.tw/`;

const searchFiled = Selector('input#lst-ib');
const searchResult = Selector('a').withAttribute("href","https://testcafe.devexpress.com/");

test('Search keyword on google', async t => {
    await t
        .typeText(searchFiled, 'test cafe')
        .pressKey('enter')
        .expect(searchResult.exists).ok('Not found the element');
});

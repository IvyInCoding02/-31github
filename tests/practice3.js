const context = await browser.newContext({
    viewport: iPhone11.viewport,
    userAgent: iPhone11.userAgent,
    geolocation: { longitude: 12.492507, latitude: 41.889938 },
    permissions: { 'https://yandex.ru/maps': ['geolocation'] }
 });
// This script was generated and reflects raw data. It is recommended to change this code to your required logic

const swaggerApi = require('./swaggerApi.js')(load);


swaggerApi.$.getBasePath = () => {
    //return `<enter your code here>`
    throw new Error("Please implement the supplied 'swaggerApi.$.getBasePath()' function.");
}


load.initialize("Initialize", async function () {
});

load.action("Action", async function () {
    load.WebRequest.defaults.returnBody = false;
    load.WebRequest.defaults.headers = {
        "Accept-Encoding": "gzip"
    };

    const t01 = new load.Transaction("Catalog");
    t01.start();

    const webResponse1 = new load.WebRequest({
        id: 1,
        url: "http://www.advantageonlineshopping.com/services.properties",
        method: "GET",
        headers: {
            "Connection": "Keep-Alive",
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; SM-G950F Build/PPR1.180610.011)"
        },
    }).sendSync();

    let webRequest2 = swaggerApi.getLastUpdatesUsingGET("Data");
    const webResponse2 = await webRequest2.send();


    let webRequest3 = swaggerApi.getDemoAppConfigParametersByToolsUsingGET("ALL");
    const webResponse3 = await webRequest3.send();


    let webRequest4 = swaggerApi.getCategoryDataUsingGET("1");
    const webResponse4 = await webRequest4.send();


    let webRequest5 = swaggerApi.getCategoryDataUsingGET("2");
    const webResponse5 = await webRequest5.send();


    let webRequest6 = swaggerApi.getCategoryDataUsingGET("3");
    const webResponse6 = await webRequest6.send();


    let webRequest7 = swaggerApi.getCategoryDataUsingGET("4");
    const webResponse7 = await webRequest7.send();


    let webRequest8 = swaggerApi.getCategoryDataUsingGET("5");
    const webResponse8 = await webRequest8.send();


    let webRequest9 = swaggerApi.getAllCategoriesAttributesUsingGET();
    const webResponse9 = await webRequest9.send();

    t01.stop();


    const webResponse10 = new load.WebRequest({
        id: 10,
        url: "http://www.advantageonlineshopping.com/accountservice/ws/accountservice/accountservice.wsdl",
        method: "POST",
        headers: {
            "Connection": "close",
            "Content-Type": "text/xml",
            "SOAPAction": "",
            "User-Agent": "kSOAP/2.0"
        },
        body: `<v:Envelope xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:d="http://www.w3.org/2001/XMLSchema" xmlns:c="http://schemas.xmlsoap.org/soap/encoding/" xmlns:v="http://schemas.xmlsoap.org/soap/envelope/">
            <v:Header></v:Header>
            <v:Body>
                <GetAccountConfigurationRequest xmlns="com.advantage.online.store.accountservice" id="o0" c:root="1"></GetAccountConfigurationRequest>
            </v:Body>
        </v:Envelope>
`,
    }).sendSync();

});

load.finalize("Finalize", async function () {
});

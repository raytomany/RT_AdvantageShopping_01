// This script was generated and reflects raw data. It is recommended to change this code to your required logic
load.initialize("Initialize", async function () {
});

load.action("Action", async function () {
    load.WebRequest.defaults.returnBody = false;
    load.WebRequest.defaults.headers = {
        "Accept-Encoding": "gzip"
    };

    const webResponse1 = new load.WebRequest({
        id: 1,
        url: "http://www.advantageonlineshopping.com/catalog/api/v1/catalog/LastUpdate/Data",
        method: "GET",
        headers: {
            "Connection": "Keep-Alive",
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; SM-G950F Build/PPR1.180610.011)"
        },
    }).sendSync();

    const webResponse2 = new load.WebRequest({
        id: 2,
        url: "http://www.advantageonlineshopping.com/catalog/api/v1/DemoAppConfig/parameters/by_tool/ALL",
        method: "GET",
        headers: {
            "Connection": "Keep-Alive",
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; SM-G950F Build/PPR1.180610.011)"
        },
    }).sendSync();

    const webResponse3 = new load.WebRequest({
        id: 3,
        url: "http://www.advantageonlineshopping.com/accountservice/ws/accountservice.wsdl",
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

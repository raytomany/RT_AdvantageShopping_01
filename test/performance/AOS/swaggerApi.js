module.exports = function(load){
/**
* Get all deals
**/
function getAllDealsUsingGET(){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/deals`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Add product to shopping cart
* @param {Authorization} JSON Web Token
* @param {color} color
* @param {hasWarranty} hasWarranty
* @param {productId} productId
* @param {quantity} quantity
* @param {userId} userId
**/
function addProductToCartUsingPOST(Authorization, color, hasWarranty, productId, quantity, userId){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/carts/${userId}/product/${productId}/color/${color}`,
        method: "POST",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "application/json"
        },
        queryString: {
            "hasWarranty": hasWarranty,
            "quantity": quantity
        },
    })
    return webRequest0;
}

/**
* Remove a product from user shopping cart
* @param {Authorization} JSON Web Token
* @param {color} color
* @param {productId} productId
* @param {userId} userId
**/
function removeProductFromUserCartUsingDELETE(Authorization, color, productId, userId){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/carts/${userId}/product/${productId}/color/${color}`,
        method: "DELETE",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Update Cart-Product quantity and/or color
* @param {Authorization} JSON Web Token
* @param {color} color
* @param {new_color} new_color
* @param {productId} productId
* @param {quantity} quantity
* @param {userId} userId
**/
function updateProductInCartUsingPUT(Authorization, color, new_color, productId, quantity, userId){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/carts/${userId}/product/${productId}/color/${color}`,
        method: "PUT",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "application/json"
        },
        queryString: {
            "new_color": new_color,
            "quantity": quantity
        },
    })
    return webRequest0;
}

/**
* Clear user shopping cart
* @param {Authorization} JSON Web Token
* @param {orderId} orderId
* @param {userId} userId
**/
function removeOrderUsingDELETE(Authorization, orderId, userId){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/orders/history/users/${userId}/${orderId}`,
        method: "DELETE",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Verify and update products quantities in user cart
* @param {Authorization} JSON Web Token
* @param {shoopingCartProducts} shoopingCartProducts
* @param {userId} userId
**/
function verifyProductsQuantitiesInUserCartUsingPUT(Authorization, shoopingCartProducts, userId){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/carts/${userId}/quantity`,
        method: "PUT",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "application/json"
        },
        body: shoopingCartProducts,
    })
    return webRequest0;
}

/**
* deactivate a user
* @param {Authorization} JSON Web Token, Use the returned token value from /login request.
* @param {deleteRequest} deleteRequest
**/
function deactivateAccountUsingPOST(Authorization, deleteRequest){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/accountrest/accountservice/api/v1/deactivate`,
        method: "POST",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "application/json"
        },
        body: deleteRequest,
    })
    return webRequest0;
}

/**
* Get detailed information about the health of the service
**/
function getHealthCheckUsingGET(){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/accountrest/accountservice/api/v1/health-check`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Order shipping cost
* @param {costRequest} costRequest
**/
function getShippingCostFromShipExUsingPOST(costRequest){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/shippingcost`,
        method: "POST",
        headers: {
            "accept": "*/*",
            "content-type": "application/json"
        },
        body: costRequest,
    })
    return webRequest0;
}

/**
* Restore Database factory settings
**/
function dbRestoreFactorySettingsUsingGET(){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/order/Restore_db_factory_settings`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Get color-attribute by product-id and color-code
* @param {color_code} color_code
* @param {product_id} product_id
**/
function getColorAttributeByProductIdAndColorCodeUsingGET(color_code, product_id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/products/${product_id}/color/${color_code}`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Upload image
* @param {Authorization} JSON Web Token
* @param {file} file
**/
function imageUploadUsingPOST(Authorization, file){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/images`,
        method: "POST",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "multipart/form-data"
        },
        body: {
            "file": file
        },
    })
    return webRequest0;
}

/**
* Get parameters by tools (separate tools by semi-colon (;))
* @param {tools_names} tools_names
**/
function getDemoAppConfigParametersByToolsUsingGET(tools_names){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/DemoAppConfig/parameters/by_tool/${tools_names}`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Return requested HTTP status code for NV
* @param {product_id} product_id
**/
function returnHttpStatusForCodeNetworkVirtualizationUsingGET(product_id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/products/id/${product_id}`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Get application status
**/
function getHealthCheckUsingGET(){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/healthcheck`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Permanent delete a user
* @param {Authorization} JSON Web Token, Use the returned token value from /login request.
* @param {deleteRequest} deleteRequest
**/
function deleteUserUsingDELETE(Authorization, deleteRequest){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/accountrest/accountservice/api/v1/delete`,
        method: "DELETE",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*"
        },
        body: deleteRequest,
    })
    return webRequest0;
}

/**
* Restore parameters default values
* @param {Authorization} JSON Web Token
**/
function restoreFactorySettingsUsingGET(Authorization){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/DemoAppConfig/Restore_Factory_Settings`,
        method: "GET",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* FOR DEV: Create new Last-Update and set its Timestamp (0 = Now
* @param {last_update_name} last_update_name
* @param {timestamp} timestamp
**/
function createLastUpdateUsingPOST(last_update_name, timestamp){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/catalog/LastUpdate/create/${last_update_name}`,
        method: "POST",
        headers: {
            "accept": "*/*",
            "content-type": "application/json"
        },
        queryString: {
            "timestamp": timestamp
        },
    })
    return webRequest0;
}

/**
* Search product by Name
* @param {name} name
* @param {quantityPerEachCategory} quantityPerEachCategory
**/
function searchProductByNameUsingGET(name, quantityPerEachCategory){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/products/search`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
        queryString: {
            "name": name,
            "quantityPerEachCategory": quantityPerEachCategory
        },
    })
    return webRequest0;
}

/**
* Get all colors codes
**/
function getColorPalletUsingGET(){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/attributes/colors_pallet`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Get orders history of orders-lines for userID
* @param {userId} userId
**/
function getHistoryOrdersLinesUsingGET(userId){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/orders/history/lines/users/${userId}`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Get orders history by user-id and/or order-id
* @param {order_id} order_id
* @param {user_id} user_id
**/
function getOrdersHistoryUsingGET(order_id, user_id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/orders/history`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
        queryString: {
            "order_id": order_id,
            "user_id": user_id
        },
    })
    return webRequest0;
}

/**
* getAllOrders
**/
function getAllOrdersUsingGET(){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/MostPopularComments`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Get product info
* @param {product_id} product_id
**/
function getProductByIdUsingGET(product_id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/products/${product_id}`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Delete product from catalog
* @param {Authorization} JSON Web Token
* @param {product_id} product_id
**/
function deleteProductUsingDELETE(Authorization, product_id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/products/${product_id}`,
        method: "DELETE",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Update product details
* @param {Authorization} JSON Web Token
* @param {product} product
* @param {product_id} product_id
**/
function updateProductUsingPUT(Authorization, product, product_id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/products/${product_id}`,
        method: "PUT",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "application/json"
        },
        body: product,
    })
    return webRequest0;
}

/**
* Restore Database factory settings
**/
function dbRestoreFactorySettingsUsingGET(){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/catalog/Restore_db_factory_settings`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Get deal and products full details for this category
* @param {category_id} category_id
**/
function getCategoryDataUsingGET(category_id){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/categories/${category_id}/products`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Change Category of product id=13 to Speakers
* @param {Authorization} JSON Web Token
**/
function updateProductCategoryToSpeakersUsingPUT(Authorization){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/products/to_speakers`,
        method: "PUT",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "application/json"
        },
    })
    return webRequest0;
}

/**
* Upload a new image to a product
* @param {Authorization} JSON Web Token
* @param {file} file
* @param {new_colors_quantity} new_colors_quantity
* @param {product_id} product_id
* @param {source} source
* @param {userId} userId
**/
function addMultipleImagesToProductUsingPOST(Authorization, file, new_colors_quantity, product_id, source, userId){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/product/images/${userId}/${source}`,
        method: "POST",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "application/json"
        },
        body: {
            "file": file
        },
        queryString: {
            "new_colors_quantity": new_colors_quantity,
            "product_id": product_id
        },
    })
    return webRequest0;
}

/**
* Contact support by email
* @param {contactUsRequest} contactUsRequest
**/
function supportSendMailUsingPOST(contactUsRequest){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/support/contact_us/email`,
        method: "POST",
        headers: {
            "accept": "*/*",
            "content-type": "application/json"
        },
        body: contactUsRequest,
    })
    return webRequest0;
}

/**
* Get configuration parameter by name
* @param {parameter_name} parameter_name
**/
function getDemoAppConfigParameterByNameUsingGET(parameter_name){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/DemoAppConfig/parameters/${parameter_name}`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* FOR DEV: Update Timestamp of an existing Last-Update
* @param {date_format} date_format
* @param {last_update_id} last_update_id
* @param {last_update_name} last_update_name
* @param {timestamp} timestamp
**/
function updateLastUpdateUsingPUT(date_format, last_update_id, last_update_name, timestamp){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/catalog/LastUpdate/update/last_update_id/${last_update_id}/last_update_name/${last_update_name}`,
        method: "PUT",
        headers: {
            "accept": "*/*",
            "content-type": "application/json"
        },
        queryString: {
            "date_format": date_format,
            "timestamp": timestamp
        },
    })
    return webRequest0;
}

/**
* Login to AOS
* @param {loginRequest} loginRequest
**/
function doLoginUsingPOST(loginRequest){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/accountrest/accountservice/api/v1/login`,
        method: "POST",
        headers: {
            "accept": "*/*",
            "content-type": "application/json"
        },
        body: loginRequest,
    })
    return webRequest0;
}

/**
* Update DemoAppConfig parameter value
* @param {name} name
* @param {param} param
**/
function updateDemoAppConfigParameterUsingPUT_1(name, param){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/DemoAppConfig/update/parameter/${name}/value`,
        method: "PUT",
        headers: {
            "accept": "*/*",
            "content-type": "application/json"
        },
        queryString: {
            "param": param
        },
    })
    return webRequest0;
}

/**
* Update DemoAppConfig parameter value
* @param {name} name
* @param {new_value} new_value
**/
function updateDemoAppConfigParameterUsingPUT(name, new_value){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/DemoAppConfig/update/parameter/${name}/value/${new_value}`,
        method: "PUT",
        headers: {
            "accept": "*/*",
            "content-type": "application/json"
        },
    })
    return webRequest0;
}

/**
* Get all categories with product's full details
**/
function getCategoryDtoDataUsingGET(){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/categories/all_data`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Logout from AOS
* @param {logoutRequest} logoutRequest
**/
function doLogoutUsingPOST(logoutRequest){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/accountrest/accountservice/api/v1/logout`,
        method: "POST",
        headers: {
            "accept": "*/*",
            "content-type": "application/json"
        },
        body: logoutRequest,
    })
    return webRequest0;
}

/**
* Get order fields
**/
function orderFieldsUsingGET(){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/orders/fields`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Export Demo App Config To Excel file
**/
function exportDemoAppConfigToExcelUsingGET(){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/DemoAppConfig/Export_To_Excel`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Get all products info
**/
function getAllProductsUsingGET(){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/products`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Create new product
* @param {Authorization} JSON Web Token
* @param {product} product
**/
function createProductUsingPOST(Authorization, product){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/products`,
        method: "POST",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "application/json"
        },
        body: product,
    })
    return webRequest0;
}

/**
* AppPulse API that mimic a failed facebook login
**/
function facebookLoginUsingPOST(){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/facebookLogin`,
        method: "POST",
        headers: {
            "accept": "*/*",
            "content-type": "application/json"
        },
    })
    return webRequest0;
}

/**
* Upload a new image to a product
* @param {Authorization} JSON Web Token
* @param {color} color
* @param {file} file
* @param {product_id} product_id
* @param {source} source
* @param {userId} userId
**/
function addImageToProductUsingPOST(Authorization, color, file, product_id, source, userId){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/product/image/${userId}/${source}/${color}`,
        method: "POST",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "multipart/form-data"
        },
        body: {
            "file": file
        },
        queryString: {
            "product_id": product_id
        },
    })
    return webRequest0;
}

/**
* Get all categories attributes
**/
function getAllCategoriesAttributesUsingGET(){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/categories/attributes`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Get user shopping cart
* @param {Authorization} JSON Web Token
* @param {userId} userId
**/
function getUserCartUsingGET(Authorization, userId){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/carts/${userId}`,
        method: "GET",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Clear user shopping cart
* @param {Authorization} JSON Web Token
* @param {userId} userId
**/
function clearUserCartUsingDELETE(Authorization, userId){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/carts/${userId}`,
        method: "DELETE",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Replace user shopping cart
* @param {Authorization} JSON Web Token
* @param {shoopingCartProducts} shoopingCartProducts
* @param {userId} userId
**/
function replaceUserCartUsingPUT(Authorization, shoopingCartProducts, userId){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/carts/${userId}`,
        method: "PUT",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "application/json"
        },
        body: shoopingCartProducts,
    })
    return webRequest0;
}

/**
* Create a new User account
* @param {accountCreateRequest} accountCreateRequest
**/
function registerUsingPOST(accountCreateRequest){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/accountrest/accountservice/api/v1/register`,
        method: "POST",
        headers: {
            "accept": "*/*",
            "content-type": "application/json"
        },
        body: accountCreateRequest,
    })
    return webRequest0;
}

/**
* Convert Timestamp (0 = Get Current Timestamp)
* @param {date_format} date_format
* @param {timestamp} timestamp
**/
function getTimestampUsingGET(date_format, timestamp){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/catalog/LastUpdate/timestamp`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
        queryString: {
            "date_format": date_format,
            "timestamp": timestamp
        },
    })
    return webRequest0;
}

/**
* Get Last-Update by ID, By Name or ALL
* @param {what_to_get} what_to_get
**/
function getLastUpdatesUsingGET(what_to_get){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/catalog/LastUpdate/${what_to_get}`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Purchase new order
* @param {Authorization} JSON Web Token
* @param {purchaseRequest} purchaseRequest
* @param {userId} userId
**/
function doPurchaseUsingPOST(Authorization, purchaseRequest, userId){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/orders/users/${userId}`,
        method: "POST",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "application/json"
        },
        body: purchaseRequest,
    })
    return webRequest0;
}

/**
* Upload a new image to a product
* @param {Authorization} JSON Web Token
* @param {file} file
* @param {product_id} product_id
* @param {source} source
* @param {userId} userId
**/
function addImageToProductUsingPOST_1(Authorization, file, product_id, source, userId){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/product/image/${userId}/${source}`,
        method: "POST",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "multipart/form-data"
        },
        body: {
            "file": file
        },
        queryString: {
            "product_id": product_id
        },
    })
    return webRequest0;
}

/**
* Get deal of the day
* @param {dealOfTheDay} dealOfTheDay
**/
function getDealOfTheDayUsingGET(dealOfTheDay){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/deals/search`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
        queryString: {
            "dealOfTheDay": dealOfTheDay
        },
    })
    return webRequest0;
}

/**
* Change user password, admins can change everyone, users can change their own
* @param {Authorization} JSON Web Token, Use the returned token value from /login request.
* @param {changePasswordRequest} changePasswordRequest
**/
function changePasswordUsingPOST(Authorization, changePasswordRequest){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/accountrest/accountservice/api/v1/change-password`,
        method: "POST",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "application/json"
        },
        body: changePasswordRequest,
    })
    return webRequest0;
}

/**
* Get all categories with product's short details
**/
function getAllCategoriesUsingGET(){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/categories`,
        method: "GET",
        headers: {
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Create product with image
* @param {Authorization} JSON Web Token
* @param {file} file
* @param {product} product
**/
function createProductWithImageUsingPOST(Authorization, file, product){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/products/images`,
        method: "POST",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "multipart/form-data"
        },
        body: {
            "file": file
        },
        queryString: {
            "product": product
        },
    })
    return webRequest0;
}

/**
* Update DemoAppConfig all parameters values
* @param {parameters} parameters
**/
function updateDemoAppConfigParametersUsingPUT(parameters){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/catalog/api/v1/DemoAppConfig/update/parameters`,
        method: "PUT",
        headers: {
            "accept": "*/*",
            "content-type": "application/json"
        },
        body: parameters,
    })
    return webRequest0;
}

/**
* Clear user shopping cart
* @param {Authorization} JSON Web Token
* @param {userId} userId
**/
function removeAllOrdersForUserUsingGET(Authorization, userId){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/orders/history/users/${userId}`,
        method: "GET",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*"
        },
    })
    return webRequest0;
}

/**
* Add old order to shopping cart
* @param {Authorization} JSON Web Token
* @param {orderId} orderId
* @param {userId} userId
**/
function addOldOrderToCartUsingPOST(Authorization, orderId, userId){
    const webRequest0 = new load.WebRequest({
        url: `${this.$.getSchema()}://${this.$.getHost()}/order/api/v1/carts/${userId}/orders/${orderId}`,
        method: "POST",
        headers: {
            "Authorization": `${Authorization}`,
            "accept": "*/*",
            "content-type": "application/json"
        },
    })
    return webRequest0;
}

/**
* getSchema
**/
function getSchema(){
    const constValue0 = `http`;
    return constValue0;
}

/**
* getHost
**/
function getHost(){
    const constValue0 = `www.advantageonlineshopping.com`;
    return constValue0;
}

/**
* getBasePath
**/
function getBasePath(){
    const constValue0 = ``;
    return constValue0;
}

return {
    getAllDealsUsingGET,
    addProductToCartUsingPOST,
    removeProductFromUserCartUsingDELETE,
    updateProductInCartUsingPUT,
    removeOrderUsingDELETE,
    verifyProductsQuantitiesInUserCartUsingPUT,
    deactivateAccountUsingPOST,
    getHealthCheckUsingGET,
    getShippingCostFromShipExUsingPOST,
    dbRestoreFactorySettingsUsingGET,
    getColorAttributeByProductIdAndColorCodeUsingGET,
    imageUploadUsingPOST,
    getDemoAppConfigParametersByToolsUsingGET,
    returnHttpStatusForCodeNetworkVirtualizationUsingGET,
    getHealthCheckUsingGET,
    deleteUserUsingDELETE,
    restoreFactorySettingsUsingGET,
    createLastUpdateUsingPOST,
    searchProductByNameUsingGET,
    getColorPalletUsingGET,
    getHistoryOrdersLinesUsingGET,
    getOrdersHistoryUsingGET,
    getAllOrdersUsingGET,
    getProductByIdUsingGET,
    deleteProductUsingDELETE,
    updateProductUsingPUT,
    dbRestoreFactorySettingsUsingGET,
    getCategoryDataUsingGET,
    updateProductCategoryToSpeakersUsingPUT,
    addMultipleImagesToProductUsingPOST,
    supportSendMailUsingPOST,
    getDemoAppConfigParameterByNameUsingGET,
    updateLastUpdateUsingPUT,
    doLoginUsingPOST,
    updateDemoAppConfigParameterUsingPUT_1,
    updateDemoAppConfigParameterUsingPUT,
    getCategoryDtoDataUsingGET,
    doLogoutUsingPOST,
    orderFieldsUsingGET,
    exportDemoAppConfigToExcelUsingGET,
    getAllProductsUsingGET,
    createProductUsingPOST,
    facebookLoginUsingPOST,
    addImageToProductUsingPOST,
    getAllCategoriesAttributesUsingGET,
    getUserCartUsingGET,
    clearUserCartUsingDELETE,
    replaceUserCartUsingPUT,
    registerUsingPOST,
    getTimestampUsingGET,
    getLastUpdatesUsingGET,
    doPurchaseUsingPOST,
    addImageToProductUsingPOST_1,
    getDealOfTheDayUsingGET,
    changePasswordUsingPOST,
    getAllCategoriesUsingGET,
    createProductWithImageUsingPOST,
    updateDemoAppConfigParametersUsingPUT,
    removeAllOrdersForUserUsingGET,
    addOldOrderToCartUsingPOST,
    getSchema,
    getHost,
    getBasePath,
    $:{
        getHost,
        getBasePath,
        getSchema,
    },
};

}
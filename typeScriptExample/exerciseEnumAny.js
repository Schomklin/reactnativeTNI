//กำหนด enum สำหรับสถานะสินค้า
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutOfStock"] = "Out of Stock";
    ProductStatus["Discontinue"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
//กำหนด array ของสินค้าโดยใช้ชนิดข้อมูล any
var products = [
    { name: "Laptop", stutus: ProductStatus.Available, price: 1200 },
    { name: "Smartphone", stutus: ProductStatus.OutOfStock, price: 700 },
    { name: "Tablet", stutus: ProductStatus.Discontinue, price: 300 }
];
//ฟังก์ชันสำหรับแสดงข้อมูลสินค้า
function displayProductDetails(products) {
    products.forEach(function (product) {
        console.log("Product: ".concat(product.name, ", Status:").concat(product.status));
    });
}
displayProductDetails(products);

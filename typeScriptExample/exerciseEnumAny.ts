//กำหนด enum สำหรับสถานะสินค้า
enum ProductStatus {
  Available = "Available",
  OutOfStock = "Out of Stock",
  Discontinue = "Discontinued"
}
//กำหนด array ของสินค้าโดยใช้ชนิดข้อมูล any
let products: any[] = [
  { name: "Laptop", stutus: ProductStatus.Available, price: 1200 },
  { name: "Smartphone", stutus: ProductStatus.OutOfStock, price: 700 },
  { name: "Tablet", stutus: ProductStatus.Discontinue, price: 300 }
];
//ฟังก์ชันสำหรับแสดงข้อมูลสินค้า
function displayProductDetails(products: any[]) {
  products.forEach((product) => {
    console.log(`Product: ${product.name}, Status:${product.status}`);
  });
}

displayProductDetails(products);

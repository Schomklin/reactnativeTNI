//กำหนดตัวแปรประเภท enum
enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Cancelled = "Cancelled",
}
//สร้างฟังก์ชัน
function displayOderStatus(status: OrderStatus) {
  switch (status) {
    case OrderStatus.Pending:
      console.log("Your order is pending.");
      break;
    case OrderStatus.Shipped:
      console.log("Your order has been shipped.");
      break;
    case OrderStatus.Cancelled:
      console.log("Your order has been cancelled.");
      break;
    default:
      console.log("Unknown order status.");
  }
} //end of function

//Testing the function
displayOderStatus(OrderStatus.Shipped);
displayOderStatus(OrderStatus.Cancelled);

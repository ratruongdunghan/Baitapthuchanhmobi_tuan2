"use strict";
function reject() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000); // delay 1s
    });
}
// Gọi hàm reject và sử dụng .catch() để xử lý lỗi
reject()
    .catch((error) => {
    console.error(error.message); // Output: "Something went wrong" sau 1 giây
});

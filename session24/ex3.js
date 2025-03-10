let arr = [];
let choice = 0;
do {
    console.log("Menu");
    console.log("1. Nhập vào mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
    console.log("4. Tính tổng và trung bình cộng của các số dương trong mảng");
    console.log("5. Đảo ngược mảng");
    console.log("6. Kiểm tra mảng có đối xứng không");
    console.log("7.thoat");
    choice = +prompt("lua chon cua ban");
    switch (choice) {
        case 1:
            let number = +prompt("moi ban nhap so phan tu cua mang");
            for (let i = 0; i < number; i++) {
                arr[i] = +prompt(`moi ban nhap phan tu thu ${i + 1}`);
            }
            break;
        
        case 2:
            for (let i = 0; i < arr.length; i++) {
                alert(`${arr[i]}, `);
            }
            break;
        case 3:
            let max = arr[0];
            let index = 0;
            for (let i = 1; i < arr.length; i++) {
                if (max < arr[i]) {
                    max = arr[i];
                    index = i;
                }
            }
            alert(`phan tu lon nhat trong mang la ${max} nam tai vi tri ${index}`);
            break;
        case 4:
            let result = 0;
            let avg = 0;
            for (let i = 0; i < arr.length; i++) {
                if (num > 0) {
                    result += arr[i];
                }
            }
            avg = result / arr.length;
            alert(`tong cua cac phan tu trong mang la ${result}, trung binh cong cac phan tu trong mang la ${avg}`);
            break;
        case 5:
            let res = arr.reverse();
            alert(`mang sau ki da dao nguoc la ${res} `);
            break;
        case 6:
            let flag = 1;
            for (let i = 0; i <arr.length; i++) {   
                if (arr[i] !== arr[arr.length - i - 1]) {
                    flag = 0;
                    break;
                }
            }
            if (flag === 0) {
                alert(`mang khong pahi la mang doi xung`);
            } else {
                alert(`mang la mang doi xung`);
            }
        
        case 7:
            alert("thoat chuong trinh thanh cong");
            break;
    }
    } while (choice != 7);
let matrix = [];
let choice = 0;
let rows = 0;
let cols = 0;

do {
    console.log("Menu:");
    console.log
        ("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log
        ("3. Tính tổng các phần tử trong mảng");
    console.log
        ("4. Tính tổng đường chéo chính");
    console.log
        ("5. Tính tổng đường chéo phụ");
    console.log
        ("6.Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)");
    console.log
        ("7. Thoát chương trình");

    choice = +prompt("Lựa chọn của bạn");
    switch (choice) {
        case 1:
           rows = +prompt("moi ban nhap so hang");
           cols = +prompt("moi ban vao so cot");
            for (let i = 0; i < rows; i++) {
                matrix[i] = [];
                for (let j = 0; j < cols; j++) {
                    matrix[i][j] = +prompt(`moi ban nhap vao phan tu hang thu ${i + 1};cot thu ${j + 1}`);
                }
            }
            break;
        case 2:
            let output = "";
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    output += matrix[i][j];
                }
                output += "\n";
            }
            alert(output);
            break;
        case 3:
            let result = 0;
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    result += matrix[i][j];
                }
            }
            alert(`tong cac phan tu trong ma tran la ${result}`);
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < rows; i++) {
                sum += matrix[i][i];
            }
            alert(`tong cac phan tu nam tren duong cheo chinh cua ma tran la ${sum}`);
            break;
        case 5:
            let sum1 = 0;
            for (let i = 0; i < rows; i++) {
                sum1 += matrix[i][cols - 1 - i];
            }
            alert(`tong cac phan tu nam tren duong cheo phu cua ma tran la ${sum1}`);
            break;
        case 6:
            break;
        case 7:
            alert
                ("thoat chuogn trinh thanh cong");
            break;

    }
} while (choice != 7);
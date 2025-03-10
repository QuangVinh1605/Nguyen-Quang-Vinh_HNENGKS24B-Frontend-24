let matrix = [];
let choice = 0;

do {
    console.log("Menu:");
   console.log
   ("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log
    ("3. Tính tổng các phần tử trong mảng");
    console.log
    ("4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó");
    console.log
    ("5. Tính trung bình cộng các phần tử của một hàng cụ thể");
    console.log
    ("6. Đảo ngược các hàng trong mảng");
    console.log
    ("7. Thoát chương trình");

    choice = +prompt("Lựa chọn của bạn");

    switch (choice) {
        case 1:
            let rows = +prompt("Nhập số hàng");
            let cols = +prompt("Nhập số cột");
            for (let i = 0; i < rows; i++) {
                matrix[i] = [];
                for (let j = 0; j < cols; j++) {
                    matrix[i][j] = +prompt(`Nhập phần tử tại hàng ${i + 1}, cột ${j + 1}:`);
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
            let sum = 0;
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    sum += matrix[i][j];
                }
            }
            alert(`${sum}`);
            break;
        case 4:
                let max = matrix[0][0];
                let maxRow = 0;
                let maxCol = 0;
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        if (matrix[i][j] > max) {
                            max = matrix[i][j];
                            maxRow = i;
                            maxCol = j;
                        }
                    }
                }
                alert(`Số lớn nhất trong ma trận là ${max}, vị trí của nó là [${maxRow}, ${maxCol}]`);
            break;
        case 5:
            let rowIndex = +prompt("Nhập chỉ số hàng cần tính trung bình");
                if (rowIndex >= 0 && rowIndex < matrix.length) {
                    let result = 0;
                    let count = matrix[rowIndex].length;
                    for (let j = 0; j < count; j++) {
                        result += matrix[rowIndex][j];
                    }
                    let avg = result / count;
                    alert(`Tổng các phần tử của hàng ${rowIndex} là ${result}, trung bình cộng là ${avg}`);
                } else {
                    alert("Chỉ số hàng không hợp lệ");
                }
        case 6:
            for (let i = 0; i < matrix.length; i++) {
                matrix[i].reverse();
                
            }
            let result1 = "Mảng sau khi đảo ngược các hàng\n";
            for (let i = 0; i < matrix.length; i++) {
                result1 += matrix[i].join(" ") + "\n";
            }
            alert(result1);
            break;
}
} while (choice != 7);

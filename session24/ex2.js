let arr = [];
let choice = 0;
do {
    console.log("Menu");
    console.log("1. Nhập vào mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. tim cac phan tu chan va le");
    console.log("4. tinh trung binh cong cua mang");
    console.log("5. xoa phan tu tai vi tri chi dinh");
    console.log("6. Tìm phần tử lớn thứ hai trong mảng");
    console.log("7.thoat");
    choice = +prompt("moi ban nhap lua chon cua minh");
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
            let chan = [];
            let le = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    chan.push(arr[i]);
                } else {
                    le.push(arr[i]);
                }
            }
            alert(`cac phan tu chan trong mang la ${chan}`);
            alert(`cac phan tu le trong mang la ${le}`);
            break;
        case 4:
            let result = 0;
            let avg = 0;
            for (let i = 0; i < arr.length; i++) {
                result += arr[i];
            }
            avg = result / arr.length;
            alert(`trung binh cong cua cac phan tu trong mang la ${avg}`);
            break;
        
        case 5:
            let position = +prompt("nhap vao vi tri phan tu ma ban muon xoa khoi mang");
            for (let i = 0; i < arr.length; i++) {
                if (position === i) {
                    arr.splice(i, 1);
                }
            }
            break;
        case 6:
            if (number < 2) {
                alert("mang khong du 2 phan tu trong mang");

            } else {
                let max1 = arr[0];
                let max2 = arr[1];

                if (max1 < max2) {
                    let temp = max1;
                    max1 = max2;
                    max2 = temp;
                }

                for (let i = 2; i < n; i++) {
                    if (arr[i] > max1) {
                        max2 = max1;
                        max1 = arr[i];
                    } else if (arr[i] > max2 && arr[i] !== max1) {
                        max2 = arr[i];
                    }
                }
            }
            alert(`phan tu lon thu hai trong mang la ${max2}`);
            break;
        case 7:
            alert(`thaot khoi mang thanh cong`);
            break;
        default:
            alert("du lieuj nhap vao khong hop le vui long nhap lai");
    }
    
} while (choice != 7);
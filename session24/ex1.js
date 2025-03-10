let arr = [];
let choice = 0;
do {
    console.log("Menu");
    console.log("1. Nhập vào mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. timf phần tử lơn snhaats và nhỏ nhấtnhất");
    console.log("4. tính tổngcác phần tử trong mảng");
    console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng");
    console.log("6. Sắp xếp mảng tăng dần");
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
            let max = arr[0], min = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            alert(`phan tu lon nhat: ${max},phan tu nho nhatnhat: ${min}`);
        break;
        
        case 4: 
            let result = 0;
            for (let i = 0; i < arr.length; i++){
                result += arr[i];
            }
            alert(`tong cac phan tu la 4{result}`);
            break;
        
        case 5: 
            let text = +prompt("moi ban nhap vao mot phan tu ma ban muon tim kiem");
            let flag = 0;
            for (let i = 0; i < arr.length; i++) {
                if (text === arr[i]) {
                    flag++;
                }
            }
            if(flag===0){
                alert(`mang khogn ton tai phan tu tren`);
            } else {
                alert(`phan tu ${text} xuat hien ${flag} lan trong mang`);
            }
            break;
    
        case 6: 
            for (let i = 0; i < arr.length; i++){
                for (let j = 0; j < arr.length - i; j++){
                    if (arr[j] > arr[j + 1]) {
                        let temp = 0;
                        temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            break;
        
        case 7:
            alert("thoat khoi mang thanh cong");
            break;
        
        default: 
            alert("lua chon khong hop le vui long chon lai")
        
            
    }
} while (choice != 7);
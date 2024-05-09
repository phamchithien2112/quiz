const cacCauHoi = [
    {
        caccauhoi: "Bài hát HÀNH TRÌNH TRÊN ĐẤT PHÙ SA do nhạc sĩ nào sáng tác?",
        cacDapAn: ["Thanh Sơn", "Trịnh Công Sơn", "Văn Cao", "Đỗ Nhuận"],
        dapAnChinhXac: "Thanh Sơn"
    },
    {
        caccauhoi: "Ai là triệu phú phát sóng trên kênh nào tại Việt Nam?",
        cacDapAn: ["VTV1", "VTV3", "HTV7", "HTV9"],
        dapAnChinhXac: "VTV3"
    },
    {
        caccauhoi: "Hệ nhị phân là một hệ đếm dùng hai ký tự để biểu đạt một giá trị số, bằng tổng số các lũy thừa của 2. Hai ký tự đó thường là:",
        cacDapAn: ["1 và 2", "2 và 1", "0 và 1", "0 và 2"],
        dapAnChinhXac: "0 và 1"
    }
   
];

let cauHoi = 0;
let soDiem = 0;

const question = document.getElementById("caccauhoi");
const cacdapan = document.getElementById("cacdapan");
const submit = document.getElementById("submit");
const result = document.getElementById("ketqua");

function Question() {
    const q = cacCauHoi[cauHoi];
    question.textContent = q.caccauhoi;
    cacdapan.innerHTML = "";
    q.cacDapAn.forEach(dapan => {
        const button = document.createElement("button");
        button.textContent = dapan;
        button.addEventListener("click", () => kiemTra(dapan));
        cacdapan.appendChild(button);
    });
}

function kiemTra(cautraloi) {
    const q = cacCauHoi[cauHoi];
    if (cautraloi === q.dapAnChinhXac) {
        soDiem++;
    }
    cauHoi++;
    if (cauHoi < cacCauHoi.length) {
        Question();
    } else {
        showKetQua();
    }
}

function showKetQua() {
    result.textContent = `Bạn đã được ${soDiem} điểm.`;
    submit.style.display = "none";
}

submit.addEventListener("click", Question);

Question();

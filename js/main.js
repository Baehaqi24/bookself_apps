document.addEventListener("DOMContentLoaded", function () {

    const submitForm = document.getElementById("form");

    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addTodo();
    });
    const submitForm2 = document.getElementById("form2");

    submitForm2.addEventListener("submit", function (event) {
        event.preventDefault();
        searchbook();
    });

    if(isStorageExist()){
        loadDataFromStorage();
    }
});

document.addEventListener("ondatasaved", () => {
    swal({
        title: "Berhasil!",
        text: "Tombol Sudah di tekan !",
        icon: "success",
        button: "Kembali"
      });
});

document.addEventListener("ondataloaded", () => {
    refreshDataFromTodos();
});

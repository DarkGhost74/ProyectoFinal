document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < 10; i++) {
        let autor = `
                <option value="${i + 1}">Chalino Sánchez</option>
            `;
        $("#autores").append(autor)
    }
    for (let i = 0; i < 10; i++) {
        let genero = `
                <option value="${i + 1}">Misterio</option>
            `;
        $("#generos").append(genero)
    }
})

const uploadManager = new Bytescale.UploadManager({
    apiKey: "free"
});

const bookImage = document.getElementById("bookImage");
const fileInput = document.getElementById("fileInput");
const captionText = document.getElementById("captionText");

bookImage.addEventListener("click", () => {
    fileInput.click();
});

const onFileSelected = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
        captionText.textContent = "Subiendo imagen... 0%";

        const { fileUrl } = await uploadManager.upload({
            data: file,
            onProgress: ({ progress }) => {
                captionText.textContent = `Subiendo imagen... ${progress}%`;
            }
        });

        bookImage.src = fileUrl;
        captionText.textContent = "Portada actualizada";
    } catch (error) {
        console.error("Error al subir la imagen:", error);
        captionText.textContent = "Error al subir la imagen. Intente nuevamente.";
    }
}
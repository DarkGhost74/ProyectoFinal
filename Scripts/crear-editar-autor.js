const uploadManager = new Bytescale.UploadManager({
    apiKey: "free"
});

const autorImage = document.getElementById("autorImage");
const fileInput = document.getElementById("fileInput");
const captionText = document.getElementById("captionText");

autorImage.addEventListener("click", () => {
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

        autorImage.src = fileUrl;
        captionText.textContent = "Imagen actualizada";
    } catch (error) {
        console.error("Error al subir la imagen:", error);
        captionText.textContent = "Error al subir la imagen. Intente nuevamente.";
    }
}
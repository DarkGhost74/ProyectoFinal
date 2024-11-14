//Funcionalidad de botón "Mostrar"
document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("inputPassword5");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.textContent = type === "password" ? "Mostrar" : "Ocultar";
});

//Conexión a API para subir imagenes
const uploadManager = new Bytescale.UploadManager({
    apiKey: "free"
});

const usuarioImage = document.getElementById("usuarioImage");
const fileInput = document.getElementById("fileInput");
const captionText = document.getElementById("captionText");

usuarioImage.addEventListener("click", () => {
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

        usuarioImage.src = fileUrl;
        captionText.textContent = "Imagen actualizada";
    } catch (error) {
        console.error("Error al subir la imagen:", error);
        captionText.textContent = "Error al subir la imagen. Intente nuevamente.";
    }
}
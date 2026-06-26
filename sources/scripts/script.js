async function sendOrderEmail() {
    document.getElementById("send-request").value = "Enviando...";
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const size = document.getElementById("size").value;
    const cover = document.getElementById("cover").value;
    const page_amount = document.getElementById("page-ammount").value;
    const format = document.getElementById("format").value;
    const orientation = document.getElementById("orientation").value;
    const quantity = document.getElementById("quantity").value;
    if (!name || !email || !size || !cover || !page_amount || page_amount < 16 || page_amount > 80 || !format || !orientation || !quantity || quantity < 1) {
        alert("Completa todos los campos antes de enviar el pedido.");
        return;
    }
    emailjs.send(
        "service_t7zdcav",
        "template_ogip6fb",
        {
            client: name,
            email: email,
            size: size,
            cover: cover,
            page_amount: document.getElementById("page-ammount").value,
            has_spiral: document.getElementById("spiral").value,
            format: format,
            orientation: orientation,
            quantity: document.getElementById("quantity").value
        },
        "PQMcpg_IlfZb_5Qi2"
    ).then(
        function(response) {
            document.getElementById("send-request").value = "✓ Su pedido ha sido enviado";
            alert("Su pedido ha sido enviado exitosamente. ¡Nos pondremos en contacto con usted pronto!");
            document.getElementById("send-request").value = "Enviar pedido por correo electrónico →";
        },
        function(error) {
            document.getElementById("send-request").value = "Error";
            alert("Hubo un error al enviar su pedido. Por favor, inténtelo de nuevo más tarde.");
            document.getElementById("send-request").value = "Enviar pedido por correo electrónico →";
        }
    );
}
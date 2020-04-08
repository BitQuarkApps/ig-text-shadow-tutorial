document.addEventListener("DOMContentLoaded", function () {
  let textos = document.querySelectorAll(".text-shadow");
  const max_size = 150;
  if (textos.length > 0) {
    textos.forEach((t) => {
      let shadow = "";
      for (let i = 0; i < max_size; i++) {
        shadow += (shadow ? "," : "") + `${i * 1}px ${i * 1}px 0 #ebd494`;
      }
      t.style.textShadow = shadow;
    });
  }
});

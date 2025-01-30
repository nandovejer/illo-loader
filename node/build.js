import { promises as fs } from "fs";

async function build() {
  const inputFile = "./index.js";
  const outputFile = "./illoLoader.min.js";

  try {
    // Leer el archivo original
    const code = await fs.readFile(inputFile, "utf-8");

    // Minificar el código (simplemente eliminando espacios y saltos de línea)
    const minified = code.replace(/\s+/g, ' ');

    // Guardar el archivo minimizado en el directorio raíz
    await fs.writeFile(outputFile, minified, "utf-8");

    console.log("✅ Build completado. Archivo generado en 'illoLoader.min.js'");
  } catch (error) {
    console.error("❌ Error en la compilación:", error);
  }
}

// Ejecutar la función de compilación
build();

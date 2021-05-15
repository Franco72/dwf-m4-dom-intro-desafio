const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  removeAllChilds = (nameOfClass) => {
    const fatherOfEls = document.querySelector(nameOfClass);
    while (fatherOfEls.firstChild) {
      fatherOfEls.removeChild(fatherOfEls.firstChild);
    }
  };
  //? esta función espera la clase css del elemento padre del cual vamos a eliminar sus hijos
  removeAllChilds(".lista");
  //* Creando y añadiendo elementos
  addElements = (coll, nameOfClass) => {
    const fatherOfEls = document.querySelector(nameOfClass);
    coll.map((e) => {
      if (e.tema) {
        let newEl = document.createElement("li");
        newEl.textContent = e.tema;
        newEl.classList.add(e.class || "item");
        fatherOfEls.appendChild(newEl);
      } else {
        throw "La colección que intentas añadir está vacía o no tiene tema";
      }
    });
  };
  //? esta función espera como primer parámetro una collection de elementos que vamos a añadir y como segundo parámetro la clase de css del elemento padre donde queremos que vivan estos elementos hijos
  addElements(cosasQueAprendimos, ".lista");
}

main();

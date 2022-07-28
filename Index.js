
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota) {
        this.mascotas.push(mascota);
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(titulo, autor) {
        this.libros.push({
            titulo,
            autor
        });
    }
    getBoocksNames() {
        // retorna un array con los nombres de los libros y el autor de cada uno de ellos separados por una coma (,)
        return this.libros.map(libro => ` Titulo: ${libro.titulo} Autor: ${libro.autor}`);
    }
}


const usuario = new Usuario('Juan', 'Perez', [{

    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes'
}, {
    titulo: 'El señor de los anillos',
    autor: 'J.R.R. Tolkien'
}
], ['lolo', 'lulu']);

console.log("Nombre completo : " + usuario.getFullName());
usuario.addMascota('lili');
console.log("Mascotas : " + usuario.mascotas);
console.log("cantidad de mascotas: " + usuario.countMascotas() + " mascotas");


usuario.addBook('Relatos cortos', 'Antón Chéjov');
console.log("Libros: " + usuario.getBoocksNames());
console.log(usuario)
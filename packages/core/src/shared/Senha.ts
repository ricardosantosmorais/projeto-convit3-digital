export default class Senha {
    static criar(tamanho: number = 15) : string {
        const minusculas = 'abcdefghijklmnopqrstuvxyz';
        const maiuculas = minusculas.toUpperCase();
        const numeros = "0123456789";
        const especiais = "!@#$%¨&*";

        const grupos = [ minusculas, maiuculas, numeros, especiais ];
        const senha = [];

        for (let index = 0; index < tamanho; index++) {
            const grupo = grupos[Math.floor(Math.random() * grupos.length)];
            senha.push(grupo[Math.floor(Math.random() * grupos.length)]);
            
        }

        return senha.join("");
    }
}

console.log(Senha.criar());
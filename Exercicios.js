// //======================EX1M1===========================

// var endereco = {
//     rua: "Rua dos pinheiros",
//     numero: 1293,
//     bairro: "Centro",
//     cidade: "São Paulo",
//     uf: "SP"
// };

// function cont(endereco) {
//     var string;

//     string = "O usuario mora em " + endereco.cidade + " / " + endereco.uf + ", no bairro " + endereco.bairro + ", na rua " + endereco.rua + " com nº " + endereco.numero + '.';
//     return string;
// }


// //======================EX2M1===========================

// function pares(x, y) {
//     for (var i = x; i <= y; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }
// }


// //======================EX3M1===========================

// var skills = ["Javascript", "ReactJS", "React Native"];



// function temhabilidade(skill) {
//     var ve = false;
//     for (var i = 0; i < 4; i++) {
//         if (skill == skills[i]) {
//             ve = true;
//         }
//     }
//     return ve;
// }


// //======================EX4M1===========================

// function experiencia(anos) {
//     if (anos < 1)
//         return "iniciante";
//     else if (anos < 4)
//         return "intermdiario";
//     else if (anos < 7)
//         return "Avancado";
//     else
//         return "Jedi master";
// }



// //======================EX5M1===========================

// var usuarios = [{
//         nome: "Diego",
//         habilidades: ["Javascript", "ReactJS", "Redux"]
//     },
//     {
//         nome: "Gabriel",
//         habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
//     }
// ];

// function cont(user) {
//     var string;

//     string = "O " + user.nome + " possui as habilidades: " + user.habilidades[0] + ", " + user.habilidades[1] + ", " + user.habilidades[2] + "\n";

//     return string;
// }
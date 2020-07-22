/* ==================================================================

Operadores de comparação

    >  Maior que

    >  Menor que

    ≥ Maior ou igual

    ≤ Menor ou igual

    == Igual a

    === Igual e do mesmo tipo (string, number ...)

    != Diferente de

    !== Diferente, inclusive do tipo

=================================================================== */

/* ===========================================================

Operadores lógicos

    &&  "E" As duas condições devem ser verdadeiras para
        que a condição final seja verdadeira.
    ||  "OU" Uma das condições deve ser verdadeira para
        que a condição final seja verdadeira.
    !   "NÃO" Nega uma condição

===============================================================  */

console.log(5 === 5 && 6 === 6) // true
console.log(5 === 5 && 6 !== 6) // false

console.log(5 !== 5 || 6 === 6) // true
console.log(5 === 5 || 6 !== 6) // true

console.log(!(5 > 6)) // true
console.log(!(5 < 6)) // false

/* ====================================================================

Operadores Aritméticos

    + Adição
    - Subtracao
    * Multiplicacao
    / Divisao
    ** Exponenciacao
    % Módulo (exibe apenas o resto da divisao)

Ordem de precedencia (mesmo principio da matematica):

1. Parenteses
2. Exponenciacao
3. Multiplicacao e divisao
4. Adicao e subtracao

======================================================================== */

console.log(2 * 2) // 4
console.log(2 / 2) // 1
console.log(2 % 1.5) // 0.5
console.log(2 + 2) // 4
console.log(2 - 2) // 0

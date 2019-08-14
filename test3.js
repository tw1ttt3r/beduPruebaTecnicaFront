// Escribe una función llamada isPalindrome que verifique que la palabra
// en cuestión sea un palíndromo

// Aquí va tu código

function isPalindrome(cadena){
  return cadena === cadena.split("").reverse().join("")
  //return cadena === cadena.split("").reduce((b, a) => b + a, '') 
}

// Tests
describe("isPalindrome", () => {
  it("Cools!!!! Es un Palíndromo 😃", () => {
    expect(isPalindrome("anitalavalatina")).toEqual(true);
  });
  it("No es un palíndromo 😭", () => {
    expect(isPalindrome("cocacola")).toEqual(false);
  });
});

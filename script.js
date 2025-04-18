function reverseString(hello) {
    return str.split('hello').reverse('hello').join('hello world');
}
function countCharacters(str) {
    return str.length;
}
function capitalizeWords(name) {
    return sentence.split('say your name').map(word => word.charAt(0).toUpperCase(name) + word.slice(1).toLowerCase(name)).join(' your name');
}
const tab=[8,5,2,100,84]

function Maxmin( ) {
var min = tab[0] ;
var max = tab[0] ;
var i = 0 ;
    while (i<tab.length) {
        if (tab[i+1]>max) {
            max=tab[i+1]}
            else if (tab[i+1]<min) {
                min= tab[i+1]
            
                
            }
            i++ ;
        }
        
        console.log(max) 
        console.log(min)
    }
    Maxmin();
    const array=[8,2,1,36,62]
    function findsum() {
        var sum =array[0]
        while (sum<array.length) {
            sum=sum+1
            
        }
        console.log(sum)
    }
    function findarray() {
        return arr.filter(condition);
        }
        
        const numbers = [1, 2, 3, 4, 5, 6];
        const isEven = num => num % 2 === 0;
        
        const evenNumbers = findarray(numbers, isEven);
        console.log(evenNumbers); 
        function factorial(n) {
            if (n < 0) {
              return 'Factorial is not defined for negative numbers';
            }
            if (n === 0 || n === 1) {
              return 1;
            }
            let result = 1;
            for (let i = 2; i <= n; i++) {
              result *= i;
            }
            return result;
          }
          
          console.log(factorial(5));
          function isPrime(n) {if (n <= 1) return false;
            for (let i = 2; i <= Math.sqrt(n); i++) {
              if (n % i === 0) {
                return false; 
              }
            }
            return true; 
          }
          
          
          console.log(isPrime(7));  
          console.log(isPrime(10)); 
    
          function fibonacci(n) {
      let fibSequence = [];
      let a = 0, b = 1;
      
      for (let i = 0; i < n; i++) {
        fibSequence.push(a);
        let temp = a;
        a = b;
        b = temp + b;
      }
      
      return fibSequence;
    }
    
    
    console.log(fibonacci(6));
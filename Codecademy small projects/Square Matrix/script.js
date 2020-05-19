const n = 3, a = [[4, 5, 11], [3, 6, 12], [-3, -5, -20]]; 
function diagonnalDifference (n, a){
   let diagonal1 = 0, diagonal2 = 0;
   for (let i = 0; i < n; i++){
      diagonal1 += a[i][i];
      diagonal2 += a[i][n-(i+1)];
   }
   console.log(Math.abs(diagonal1 - diagonal2))
} 
diagonnalDifference(n, a)
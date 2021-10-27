
var arr = []
const fyfFunc = (points, names,left, i, comb, add) =>{
        if (add){
            comb.push(add)
        }

        if (left == 0 || (i + 1) == points.length){
            if((i + 1) == points.length && left  > 0){
                if(left % points[i]){
                    return 0
                }

                comb.push([left/points[i], points[i]])
                
                i += 1
            }
            while(i < points.length){
                comb.push([0, points[i]])
                i += 1
            }

            var obj = {}

            for(var item of comb){
                var c = item[1]
                var n = item[0]
                var currencyName = names[c]


                obj[currencyName] = n
            }
            arr.push(obj)
            return 1
        }

        
        
        cur = points[i]
        for(var x= 0; x < Math.floor(left/cur)+1; x++){
            const temp = [...comb]
            fyfFunc(points,names,left-x*cur, i + 1, temp, [x, cur])
        }
}


const totalSum = (obj) =>{
    arr = []
    let points = [25,10,5,1]
    let names = {25: "quarter(s)", 10: "dime(s)", 5 : "nickel(s)", 1 : "pennies"}
    var cents = 100;
    fyfFunc(points,names,cents, 0, [], undefined)
    return arr
}


const endPoint2 = (obj) =>{
    arr = []
    const points = Object.values(obj)
    var biggestCommon = findlcm(points, points.length)
    var temp = {}
    for(var key in obj){
        var name = key
        temp[name] = Math.floor(biggestCommon / obj[key])
    }


    
    const names = {}
    for(var key in temp){
        var num = parseInt(temp[key])
        names[num] = key
    }

    const newPoints = Object.keys(names).map(item => parseInt(item)).reverse()
    
    
    var cents = biggestCommon

    fyfFunc(newPoints,names, cents ,0,[], undefined)

    return arr

}





function gcd(a, b)
{
    if (b == 0)
        return a;
    return gcd(b, a % b);
}
 
// Returns LCM of array elements
function findlcm(arr, n)
{
    // Initialize result
    let ans = arr[0];
 
    // ans contains LCM of arr[0], ..arr[i]
    // after i'th iteration,
    for (let i = 1; i < n; i++)
        ans = (((arr[i] * ans)) /
                (gcd(arr[i], ans)));
 
    return ans;
}
    

module.exports = {totalSum, endPoint2}
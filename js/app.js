function canAccessWebSite(age) {
    if (age < 18){
        return 'no'
    }
    return 'yes';

}

console.log(canAccessWebSite(19));

const canAccessWebSite2 = age => age < 18 ? 'no' : 'yes';
console.log(canAccessWebSite2(19)); 

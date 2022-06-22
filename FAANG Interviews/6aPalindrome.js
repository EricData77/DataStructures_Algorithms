const s = "A man, a plan, a canal: Panama";

function palinDrome(string) {
    string = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    let left = 0, right = string.length - 1;

    while(left < right ) {
        if (string[left] !== string[right]) {
            return false;

            left ++;
            right --;
        }
        return true;
    }
}

console.log(palinDrome(s));
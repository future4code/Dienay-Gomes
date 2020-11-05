const checaParentesesValidos = (input) => {
    let abertura = [];
    for (let item of input) {
        if (item === "(" || item === "{" || item === "[") {
            abertura.push(item);
        }
        else {
            let fechamento = abertura.pop();
            if (!fechamento) {
                return false;
            }
            else if ((fechamento === "(" && item !== ")") ||
                (fechamento === "{" && item !== "}") ||
                (fechamento === "[" && item !== "]")) {
                return false;
            }
        }
    }
    if (abertura.length > 0) {
        return false;
    }
    return true;
};
console.log(checaParentesesValidos("()"));
console.log(checaParentesesValidos("()[]{}"));
console.log(checaParentesesValidos("(]"));
console.log(checaParentesesValidos("([)]"));
console.log(checaParentesesValidos("{[]}"));

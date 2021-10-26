def apply(num, f):
    return f(num)

def double(num):
    return num * 2

print(apply(5, double))

# Lambda é o arrow function de python, uma forma de abreviar uma function.
    # Não pode passar de uma linha, já que python trabalha com indentação
print(apply(5, lambda num: 2 * num))

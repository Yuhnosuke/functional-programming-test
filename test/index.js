const succ = (n) => {
  return n + 1
}

const prev = (n) => {
  return n - 1
}

const add = (x, y) => {
  return y < 1 ? x : add(succ(x), prev(y))
}

const times = (count, func, arg, memo) => {
  return count > 1 ? times(count - 1, func, arg, func(memo, arg)) : func(memo, arg)
}

const multiply = (n, m) => {
  return times(m, add, n, 0)
}

const exponential = (n, m) => {
  return times(m, multiply, n, 1)
}

const sum = (array) => {
  return array.reduce((acc, item) => {
    return acc + item
  }, 0)
}

const product = (array) => {
  return array.reduce((acc, item) => {
    return acc * item
  }, 1)
}

const map = (transform) => {
  return (array) => {
    return array.reduce((acc, item) => {
      return acc.concat(transform(item))
    }, [])
  }
}

const constant = (any) => {
  return (_) => {
    return any
  }
}

const alwaysOne = constant(1)

// const length = (array) => {
//   return sum(map(alwaysOne)(array))
// }

const compose = (f, g) => {
  return (arg) => {
    return f(g(arg))
  }
}

const length = (array) => {
  return compose(sum, map(alwaysOne))(array)
}

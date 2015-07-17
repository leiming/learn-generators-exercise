function askFoo() {
  return new Promise(function(resolve, reject) {
    resolve('foo')
  })
}

function run(generator) {
  var it = generator()

  function resume(result) {
    result.value.then(function(value) {
      return resume(it.next(value))
    }, function(reason) {
     return resume(it.throw(reason))
    })
  }

  resume(it.next())
}

run(function*() {
  try {
    var foo = yield askFoo()
  console.log(foo)
  } catch (err) {
    console.log(err)
  }
})

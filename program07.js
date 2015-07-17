var fs = require('fs')

function run(generator) {
  var it = generator(resume)

  function resume(result) {
    result.value.then(function(value) {
      it.next(value)
    }, function(reason) {
      it.throw(reason)
    })
  }

  resume(it.next())
}

function readDir(dir) {
  return new Promise(function(resolve, reject) {
    fs.readdir(dir, function(err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

run(function*(done) {
  try {
    var dirs = yield readDir('dirs')
    console.log(dirs)
  } catch (err) {
    console.log(err);
  }
})

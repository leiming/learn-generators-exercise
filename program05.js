var fs = require('fs')

function run(generator) {
  var it = generator(go)

  function go(err, result) {
    if (err) {
      it.throw(err)
    }
    it.next(result)
  }

  go()
}

run(function*(done) {
  var dirFiles, firstFile
  try {
    dirFiles = yield fs.readdir('NoNoNo', done)
    firstFile = dirFiles[0]
  } catch (err) {
    firstFile = null
  }

  console.log(firstFile)
})



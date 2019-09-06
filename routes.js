const reqHandler = (req,res)=>{
  let reqUrl = req.url
  let reqMethod = req.method
  if (reqUrl === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="zh-cn">')
    res.write('<head><meta charset="UTF-8"><title>node test</title></head>')
    res.write('<body><form method="POST" action="/create-user"><input type="text" name="name"/><button type="submit">送出</button></form></body>')
    res.write('</html>')
    res.end()
  }
  if (reqUrl === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>node test</title></head>')
    res.write('<body><ul><li>one</li><li>two</li><li>three</li></ul></body>')
    res.write('</html>')
    res.end()
  }
  if (reqUrl === '/create-user' && reqMethod === 'POST') {
    const body =[]
    req.on('data',(chunk)=>{
      body.push(chunk)
    })
    req.on('end',()=>{
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody)
    })
    res.statusCode = 302;
    res.setHeader('Location','/')
    res.end()
  }
}

module.exports= reqHandler
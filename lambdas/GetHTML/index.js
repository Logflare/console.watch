let html = `<!doctype>

<html>
  <head>
    <title>console.watch</title>
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
    <style>
      body {
        font-family: monospace;
        font-size: 16px;
        padding: 0;
        margin: 0;
      }

      .console {
        padding: 0;
        margin: 0;
      }

      .console li {
        list-style: none;
        border-bottom: 1px solid #ccc;
        padding: 10px 10px 10px 36px;
        background-size: 16px;
        background-repeat: no-repeat;
        background-position: top 10px left 10px;
        line-height: 1.5em;
      }

      .console li::last-child {
        border-bottom: 1px solid #666;
      }

      .console li.info {
        background-image: url("data:image/svg+xml; utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22%2F%3E%3Cpath%20d%3D%22M11%207h2v2h-2zm0%204h2v6h-2zm1-9C6.48%202%202%206.48%202%2012s4.48%2010%2010%2010%2010-4.48%2010-10S17.52%202%2012%202zm0%2018c-4.41%200-8-3.59-8-8s3.59-8%208-8%208%203.59%208%208-3.59%208-8%208z%22%2F%3E%3C%2Fsvg%3E");
      }

      .console li.warn {
        background-image: url("data:image/svg+xml; utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M1%2021h22L12%202%201%2021zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z%22%20fill%3D%22%23ECBF41%22%2F%3E%3C%2Fsvg%3E");
        background-color: rgba(236, 191, 65, .1);
      }

      .console li.error {
        background-image: url("data:image/svg+xml; utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M12%202C6.48%202%202%206.48%202%2012s4.48%2010%2010%2010%2010-4.48%2010-10S17.52%202%2012%202zm1%2015h-2v-2h2v2zm0-4h-2V7h2v6z%22%20fill%3D%22%23D60122%22%2F%3E%3C%2Fsvg%3E");
        background-color: rgba(214, 1, 34, .1);
      }

      .console li a {
        text-decoration: underline;
        color: blue;
        cursor: pointer;
      }

      .console li pre {
        margin: 0;
        paddingZ: 0;
      }
    </style>
  </head>
  <body>
    <ul class=console>
      <li>Establishing a connection...</li>
    </ul>
  </body>
  <script src=index.js></script>
</html>`

exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {'Content-Type': 'text/html;charset=utf-8'},
    body: html
  }
}

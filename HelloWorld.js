//�ޥ�'http'�Ҳ�
const http = require('http');

//�]�wserver���}�A�]���b�����ݴ��աA�ҥH��J127.0.0.1
const hostname = '127.0.0.1';
//�]�wport���A�o��h�ֳ��i�H�A���n�M�{����port���ƴN�n
const port = 3000;

//�s�W�@��server�ë��w�L��������T�A���e��'Hello World!'
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
});

//��ť���s�ت�server�A�}�ҫ�N����̭���console.log
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

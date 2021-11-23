//�ϥ� WebSocket �����}�V Server �}�ҳs��
let ws = new WebSocket('ws://localhost:3000')

//�}�ҫ���檺�ʧ@�A���w�@�� function �|�b�s�� WebSocket �����
ws.onopen = () => {
    console.log('open connection')
}

//��������檺�ʧ@�A���w�@�� function �|�b�s�����_�����
ws.onclose = () => {
    console.log('close connection')
}

//���� Server �o�e���T��
ws.onmessage = event => {
    console.log(event.data)
    document.getElementById("demo").innerHTML = event.data;
}

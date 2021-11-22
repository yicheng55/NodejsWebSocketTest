//import express �M ws �M��
const express = require('express')
const SocketServer = require('ws').Server

//���w�}�Ҫ� port
const PORT = 3000

//�Ы� express ������A�øj�w�κ�ť 3000 port �A�B�]�w�}�ҫ�b console ������
const server = express()
    .listen(PORT, () => console.log(`Listening on ${PORT}`))

//�N express �浹 SocketServer �}�� WebSocket ���A��
const wss = new SocketServer({ server })

//�� WebSocket �q�~���s���ɰ���
wss.on('connection', ws => {

    //�s���ɰ��榹 console ����
    console.log('Client connected')

    //�� message �]�w��ť�A�����q Client �o�e���T��
    ws.on('message', data => {
        //data �� Client �o�e���T���A�{�b�N�T����ʤ��ʵo�e�X�h
        ws.send(data)
    })

    //�� WebSocket ���s�u�����ɰ���
    ws.on('close', () => {
        console.log('Close connected')
    })
})
